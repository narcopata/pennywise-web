import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState, FormEventHandler } from "react";
import { useAuthContext } from "~app/contexts/auth";
import { authServices } from "~app/services/auth";
import { SignInParams } from "~app/services/auth/signin";

export const FORM_FIELDS = Object.freeze({
	EMAIL: "email",
	PASSWORD: "password",
});

type ValueOf<Obj extends Record<string, unknown>> = Obj[keyof Obj];

export const useSignIn = () => {
	const [formData, setFormData] = useState<{
		[key in ValueOf<typeof FORM_FIELDS>]?: string;
	}>({});

	const navigate = useNavigate();

	const { signIn } = useAuthContext();

	const signInMutation = useMutation({
		mutationFn: async (data: SignInParams) => {
			return await authServices.signIn(data);
		},
	});

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	const handleSumbit: FormEventHandler<HTMLFormElement> = async (
		data,
	): Promise<void> => {
		void data.preventDefault();

		if (!(formData[FORM_FIELDS.EMAIL] && formData[FORM_FIELDS.PASSWORD])) {
			return;
		}

		try {
			const { accessToken } = await signInMutation.mutateAsync(
				formData as Required<typeof formData>,
			);

			signIn(accessToken);

			void navigate({
				to: "/",
			});
		} catch {
			// Tratativa de erros
		}
	};

	return {
		handleSumbit,
		setFormData,
	};
};
