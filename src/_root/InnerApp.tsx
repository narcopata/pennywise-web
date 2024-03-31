import { RouterProvider, createRouter } from "@tanstack/react-router";
import { useAuthContext } from "~app/contexts/auth";
import { routeTree } from "../routeTree.gen";
import { AuthContextType } from "~app/contexts/auth/context";

// Create a new router instance
const router = createRouter({
	routeTree,
	context: { auth: null as unknown as AuthContextType },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export const InnerApp = () => {
	const auth = useAuthContext();

	return <RouterProvider router={router} context={{ auth }} />;
};
