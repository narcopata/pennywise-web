import { httpClient } from "../httpClient";

type Params = {
	email: string;
	password: string;
};

type Response = {
	accessToken: string;
};

export const signUp = async (params: Params): Promise<Response> => {
	const data = await httpClient
		.post("auth/signup", {
			json: params,
		})
		.json<Response>();

	return data;
};
