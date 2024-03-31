import { createFileRoute, redirect } from "@tanstack/react-router";
import { Home } from "~app/pages/home";

export const Route = createFileRoute("/")({
	component: Home,
	beforeLoad: ({ location, context }) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		if (!context.auth.signedIn) {
			throw redirect({
				to: "/access/signin",
				search: {
					redirect: location.href,
				},
			});
		}
	},
});
