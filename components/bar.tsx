import { Card, Metric, Text, Divider, AreaChart } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    "Gross Volume": 2890,
    "Successful Payments": 2400,
    Customers: 4938,
  },
  {
    Month: "Feb 21",
    "Gross Volume": 1890,
    "Successful Payments": 1398,
    Customers: 2938,
  },
  // ...
  {
    Month: "Jan 22",
    "Gross Volume": 3890,
    "Successful Payments": 2980,
    Customers: 2645,
  },
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export function Bar() {
  return (
    <Card className="mx-auto">
      <Text>Gross Volume</Text>
      <Metric>$ 12,699</Metric>
      <AreaChart
        className="mt-8 h-44"
        data={data}
        categories={["Gross Volume"]}
        index="Month"
        colors={["indigo"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
      />


    </Card>
  );
}