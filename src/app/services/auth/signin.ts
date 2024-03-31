import { httpClient } from "../httpClient";

type Params = {
	email: string;
	password: string;
};

type Response = {
	accessToken: string;
};

export const signIn = async (params: Params): Promise<Response> => {
	const data = await httpClient
		.post("auth/signin", {
			json: params,
		})
		.json<Response>();

	return data;
};

export type { Params as SignInParams };
