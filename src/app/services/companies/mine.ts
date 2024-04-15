import { Company } from "~app/entities/Company";
import { httpClient } from "../httpClient";
import { Transaction, TransactionType } from "~app/entities/Transaction";

type Response<Filter extends TransactionType | undefined = undefined> =
	(Company & undefined extends Filter
		? { transactions: Transaction[] }
		: { transactions: Transaction<Exclude<Filter, undefined>>[] })[];

export const mine = async <Filter extends "income" | "expense" | undefined>(
	params?: Filter extends undefined ? never : { transactionType: Filter },
): Promise<Response<Filter>> => {
	const data = await httpClient
		.get("companies/user", {
			searchParams: params,
		})
		.json<Response>();

	return data;
};

export type { Response as CompaniesMineResponse };
