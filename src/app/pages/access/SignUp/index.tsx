import * as styles from "./styles.css";
import { useSignUpController } from "./use-sign-up.controller";

const FORM_FIELDS = Object.freeze({
	EMAIL: "email",
	PASSWORD: "password",
	REPASSWORD: "repassword",
});

export const SignUp: React.FunctionComponent = () => {
	const { handleSumbit, setFormData } = useSignUpController();

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
