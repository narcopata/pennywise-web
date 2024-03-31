import { FormEventHandler, useCallback, useState } from "react";
import * as styles from "./styles.css";
import { authServices } from "~app/services/auth";
import { useNavigate } from "@tanstack/react-router";

const FORM_FIELDS = Object.freeze({
	EMAIL: "email",
	PASSWORD: "password",
	REPASSWORD: "repassword",
});

export const SignUp: React.FunctionComponent = () => {
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

	return (
		<div className={styles.container}>
			<h1>Sign Up</h1>

			<form className={styles.form} action="" onSubmit={handleSumbit}>
				<label htmlFor="e-mail" className={styles.label}>
					E-mail
				</label>
				<input
					name="e-mail"
					title="Enter email"
					placeholder="E-mail"
					type="email"
					onChange={(e) => {
						setFormData((prev) => ({
							...prev,
							[FORM_FIELDS.EMAIL]: e.target?.value,
						}));
					}}
					className={styles.input}
				></input>

				<label htmlFor={FORM_FIELDS.PASSWORD} className={styles.label}>
					Password
				</label>
				<input
					name={FORM_FIELDS.PASSWORD}
					title="Password"
					placeholder="********"
					type="password"
					onChange={(e) => {
						setFormData((prev) => ({
							...prev,
							[FORM_FIELDS.PASSWORD]: e.target?.value,
						}));
					}}
					className={styles.input}
				></input>

				<label htmlFor={FORM_FIELDS.REPASSWORD} className={styles.label}>
					Confirm password
				</label>
				<input
					name={FORM_FIELDS.REPASSWORD}
					title="Confirm password"
					placeholder="Re-enter password"
					type="password"
					onChange={(e) => {
						setFormData((prev) => ({
							...prev,
							[FORM_FIELDS.REPASSWORD]: e.target?.value,
						}));
					}}
					className={styles.input}
				></input>

				<button className={styles.button} type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};
