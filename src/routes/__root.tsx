import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";
import { AuthContextType } from "~app/contexts/auth/context";

const RootRoute: React.FC = () => {
	return (
		<>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
};

export const Route = createRootRouteWithContext<{ auth: AuthContextType }>()({
	component: RootRoute,
});
