import { Card, Flex } from "antd";
import React from "react";
import { TransactionType } from "~app/entities/Transaction";

type Props = {
	name: string;
	amount: number;
	description?: string | null;
	date: Date | string;
	type: TransactionType;
};

const TransactionCard: React.FC<Props> = ({
	amount,
	date,
	description,
	name,
	type,
}) => {
	return (
		<Flex gap="middle">
			<Card title={name} style={{ fontFamily: "Geist Variable" }}>
				<Flex vertical>
					<p style={{ color: type === "expense" ? "red" : "green" }}>
						Valor: R${amount}
					</p>
					{description && <p>Descrição: {description}</p>}
					<p>
						Data de {type === "income" ? "recebimento" : "pagamento"}:{" "}
						{date.toString()}
					</p>
				</Flex>
			</Card>
		</Flex>
	);
};

export { TransactionCard as TransactionCard };

export type { Props as TransactionCardProps };
