export type TransactionType = "income" | "expense";

export type Transaction<Type extends TransactionType = TransactionType> = {
	type: Type;
	name: string;
	date: Date | string;
	amount: number;
	description?: string | null;
	id: string;
};
