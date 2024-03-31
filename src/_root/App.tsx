import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "~app/contexts/auth/provider";
import { InnerApp } from "./InnerApp";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContextProvider value={null}>
				<InnerApp />
			</AuthContextProvider>
		</QueryClientProvider>
	);
};
