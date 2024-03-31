/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext, AuthContextType } from "./context";
import { Context } from "use-context-selector";
import { LOCAL_STORAGE_KEYS } from "~app/config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { companiesService } from "~app/services/companies";
import { QUERY_KEYS } from "~app/config/queryKeys";

export const AuthContextProvider: Context<AuthContextType | null>["Provider"] =
	({ children }) => {
		const [signedIn, setSignedIn] = useState(
			() => !!localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
		);

		const companiesMineQuery = useQuery({
			queryKey: QUERY_KEYS.COMPANIES.MINE,
			queryFn: () => companiesService.mine(),
			enabled: signedIn,
			staleTime: Infinity,
		});

		const signOut = useCallback<AuthContextType["signOut"]>(() => {
			localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
			setSignedIn(false);
		}, []);

		const signIn = useCallback<AuthContextType["signIn"]>((accessToken) => {
			localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
			setSignedIn(true);
		}, []);

		useEffect(() => {
			companiesMineQuery.isError && signOut();
		}, [companiesMineQuery.isError, signOut]);

		const contextData = useMemo<AuthContextType>(() => {
			return {
				signedIn: signedIn && companiesMineQuery.isSuccess,
				signOut,
				signIn,
				companies: companiesMineQuery.data ?? [],
			};
		}, [
			companiesMineQuery.data,
			companiesMineQuery.isSuccess,
			signIn,
			signOut,
			signedIn,
		]);

		return (
			<AuthContext.Provider value={contextData}>
				{!companiesMineQuery.isFetching && children}
			</AuthContext.Provider>
		);
	};
