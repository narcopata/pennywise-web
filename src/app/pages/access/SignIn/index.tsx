import * as styles from "./styles.css";
import { FORM_FIELDS, useSignIn } from "./use-sign-in.controller";

export const SignIn: React.FunctionComponent = () => {
	const { handleSumbit, setFormData } = useSignIn();

	return (
		<div className={styles.container}>
			<h1>Sign In</h1>

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
							[FORM_FIELDS.EMAIL]: e.currentTarget?.value,
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
				<button className={styles.button} type="submit">
					Sign In
				</button>
			</form>
		</div>
	);
};
