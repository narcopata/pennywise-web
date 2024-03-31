import { Company } from "~app/entities/Company";
import { httpClient } from "../httpClient";

type Response = Company[];

export const mine = async (): Promise<Response> => {
	const data = await httpClient.get("companies/user").json<Response>();

	return data;
};
