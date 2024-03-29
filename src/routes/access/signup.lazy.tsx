import { createLazyFileRoute } from "@tanstack/react-router";
import { SignUp } from "~app/pages/access/SignUp";

export const Route = createLazyFileRoute("/access/signup")({
	component: SignUp,
});
