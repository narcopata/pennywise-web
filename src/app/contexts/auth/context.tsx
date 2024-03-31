import { createContext } from "react";
import { Company } from "~app/entities/Company";

export type AuthContextType = {
	signedIn: boolean;
	companies: Company[];
	signIn: (accessToken: string) => void;
	signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
