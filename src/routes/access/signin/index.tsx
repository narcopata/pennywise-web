import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignIn } from "~app/pages/access/SignIn";

export const Route = createFileRoute("/access/signin/")({
	component: SignIn,
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
