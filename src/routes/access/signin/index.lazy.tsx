import { createLazyFileRoute } from "@tanstack/react-router";
import { SignIn } from "~app/pages/access/SignIn";

export const Route = createLazyFileRoute("/access/signin/")({
	component: SignIn,
});
