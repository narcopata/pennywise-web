import { Tabs, TabsProps } from "antd";
import { FunctionComponent } from "react";
import {
	TransactionCard,
	TransactionCardProps,
} from "./components/TransactionCard";
import { HomeControllerReturnType, useHome } from "./use-home.controller";
import { container } from "./styles.css";
import { GeneralReport } from "./components/GeneralReport";


const tabs: (data: {
	expenseList: HomeControllerReturnType["companiesExpenseList"];
	incomeList: HomeControllerReturnType["companiesIncomeList"];
	allList: HomeControllerReturnType["allTransactions"]
}) => TabsProps["items"] = (data) => [
	{
		key: "1",
		label: "Gastos",
		children: (
			<>
				{data.expenseList
					.reduce(
						(acc, curr) => {
							const expenses = curr.transactions.map<
								TransactionCardProps & { id: string }
							>((transaction) => ({
								name: curr.name,
								amount: transaction.amount,
								date: transaction.date,
								description: transaction.description,
								id: transaction.id,
								type: "expense",
							}));

							const listToReturn = [...acc, ...expenses];

							return listToReturn;
						},
						[] as (TransactionCardProps & { id: string })[],
					)
					.map((props) => (
						<TransactionCard key={props.id} {...props} />
					))}
			</>
		),
	},
	{
		key: "2",
		label: "Receita",
		children: (
			<>
				{data.incomeList
					.reduce(
						(acc, curr) => {
							const expenses = curr.transactions.map<
								TransactionCardProps & { id: string }
							>((transaction) => ({
								name: curr.name,
								amount: transaction.amount,
								date: transaction.date,
								description: transaction.description,
								id: transaction.id,
								type: "income",
							}));

							const listToReturn = [...acc, ...expenses];

							return listToReturn;
						},
						[] as (TransactionCardProps & { id: string })[],
					)
					.map((props) => (
						<TransactionCard key={props.id} {...props} />
					))}
			</>
		),
	},
	{
		key: "3",
		label: "Relatório geral",
		children: <GeneralReport data={data.allList} />,
	},
];

export const Home: FunctionComponent = () => {
	const { companiesExpenseList, companiesIncomeList, allTransactions } =
		useHome();

	return (
		<div className={container}>
			<Tabs
				defaultActiveKey="1"
				tabPosition="left"
				// Remove when setting up css custom on provider
				style={{ height: 220, fontFamily: "Geist Variable" }}
				items={tabs({
					expenseList: companiesExpenseList,
					incomeList: companiesIncomeList,
					allList: allTransactions,
				})}
			/>
		</div>
	);
};
