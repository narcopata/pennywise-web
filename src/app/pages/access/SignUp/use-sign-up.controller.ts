import { useNavigate } from "@tanstack/react-router";
import { useState, FormEventHandler, useCallback } from "react";
import { authServices } from "~app/services/auth";

export const FORM_FIELDS = Object.freeze({
	EMAIL: "email",
	PASSWORD: "password",
	REPASSWORD: "repassword",
});

export const useSignUpController = () => {
  const [formData, setFormData] = useState<
		Partial<Record<(typeof FORM_FIELDS)[keyof typeof FORM_FIELDS], string>>
	>({});

	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	const handleSumbit: FormEventHandler<HTMLFormElement> = useCallback(
		async (event) => {
			event.preventDefault();

			try {
				if (
					!formData.email ||
					!formData.password ||
					!formData.repassword ||
					formData.password !== formData.repassword
				) {
					throw new Error(JSON.stringify(formData, null, 2));
				}

				await authServices.signUp({
					email: formData.email,
					password: formData.password,
				});

				void navigate({
					to: "/access/signin",
				});
			} catch {
				// Tratativa de erros
			}
		},
		[formData, navigate],
	);

  return {
    handleSumbit,
    setFormData
  }
}