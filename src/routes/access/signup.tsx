import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignUp } from "~app/pages/access/SignUp";

export const Route = createFileRoute("/access/signup")({
	component: SignUp,
	// eslint-disable-next-line @typescript-eslint/require-await
	beforeLoad: async ({ context, location }) => {
		if (context.auth.signedIn) {
			throw redirect({
				to: "/",
				search: {
					redirect: location.href,
				},
			});
		}
	},
});
