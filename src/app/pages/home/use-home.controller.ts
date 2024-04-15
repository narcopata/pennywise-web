import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useMemo } from "react";
import { QUERY_KEYS } from "~app/config/queryKeys";
import { useAuthContext } from "~app/contexts/auth";
import { Transaction, TransactionType } from "~app/entities/Transaction";
import { companiesService } from "~app/services/companies";

export type HomeControllerReturnType = {
	companiesIncomeList: {
		name: string;
		identifier: string;
		transactions: Transaction<"income">[];
	}[];
	companiesExpenseList: {
		name: string;
		identifier: string;
		transactions: Transaction<"expense">[];
	}[];
	allTransactions: {
		date: string;
		amount: number;
		type: TransactionType;
	}[];
};

export const useHome = (): HomeControllerReturnType => {
	const { companies } = useAuthContext();

	const companiesIncomeListQuery = useQuery({
		queryKey: QUERY_KEYS.COMPANIES.MINE_INCOME,
		queryFn: () =>
			companiesService.mine({
				transactionType: "income",
			}) as unknown as Promise<HomeControllerReturnType["companiesIncomeList"]>,
	});

	const companiesExpenseListQuery = useQuery({
		queryKey: QUERY_KEYS.COMPANIES.MINE_EXPENSE,
		queryFn: () =>
			companiesService.mine<"expense">({
				transactionType: "expense",
			}) as unknown as Promise<
				HomeControllerReturnType["companiesExpenseList"]
			>,
	});

	const companiesAllList = companies;

	const allTransactions = useMemo<
		HomeControllerReturnType["allTransactions"]
	>(() => {
		if (!companiesAllList) {
			return [];
		}

		return companiesAllList.reduce(
			(acc, company) => {
				const transactionsByCompany = company.transactions.map(
					(transaction) => ({
						date: format(transaction.date, "MMM"),
						amount: transaction.amount,
						type: transaction.type,
					}),
				);

				return [...acc, ...transactionsByCompany];
			},
			[] as HomeControllerReturnType["allTransactions"],
		);
	}, [companiesAllList]);

	return {
		companiesExpenseList: companiesExpenseListQuery.data ?? [],
		companiesIncomeList: companiesIncomeListQuery.data ?? [],
		allTransactions,
	};
};
