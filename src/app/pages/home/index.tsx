import { Tabs, TabsProps } from "antd";
import { FunctionComponent } from "react";

const tabs: TabsProps["items"] = [
	{
		key: "1",
		label: "Gastos",
		children: "",
	},
	{
		key: "2",
		label: "Receita",
	},
	{
		key: "3",
		label: "Relatório geral",
	},
];

export const Home: FunctionComponent = () => {
	return (
		<>
			<Tabs
				defaultActiveKey="1"
				tabPosition="left"
				style={{ height: 220 }}
				items={tabs}
			/>
		</>
	);
};
