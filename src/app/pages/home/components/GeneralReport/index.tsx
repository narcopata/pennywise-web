import { Column } from "@ant-design/charts";
import React, { useMemo } from "react";
import { TransactionType } from "~app/entities/Transaction";

type Props = {
	data: {
		date: string;
		amount: number;
		type: TransactionType;
	}[];
};

export const GeneralReport: React.FC<Props> = (props) => {
	const graphData = useMemo(() => {
		const data = props.data.map((item) => ({
			...item,
			type: item.type === "income" ? "Recebimento" : "Pagamento",
		}));

		return data;
	}, [props.data]);

	return (
		<Column
			xField="date"
			yField="amount"
			data={graphData}
			group
			colorField="type"
		/>
	);
};
