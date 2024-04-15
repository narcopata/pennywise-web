import { createContext } from "react";
import { CompaniesMineResponse } from "~app/services/companies/mine";

export type AuthContextType = {
	signedIn: boolean;
	companies: CompaniesMineResponse;
	signIn: (accessToken: string) => void;
	signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
