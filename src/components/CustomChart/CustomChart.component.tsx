import React from "react";
import { Chart } from "react-charts";

import "./CustomChart.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root.reducer";
import { FinanceTransactionsDataNode } from "../../redux/financeTransactions/financeTransactions.reducer";

const CustomChart: React.FC = () => {
  const transactionData = useSelector(
    (state: RootState): FinanceTransactionsDataNode[] => state.financeTransactions.data
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthData = months.map((_, i) => {
    const getMonthToCount = transactionData.filter((td) => {
      const getMonth = new Date(td.created_at).getMonth();
      return getMonth === i;
    });

    const getTotal = getMonthToCount.reduce((a, b) => a + b.debit_amount, 0);
    return [months[i], getTotal];
  });

  const data = React.useMemo(
    () => [
      {
        label: "Transaction",
        data: monthData,
      },
    ],
    [transactionData]
  );

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    [transactionData]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    [transactionData]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <Chart series={series} data={data} axes={axes} tooltip />
    </div>
  );
};

export default CustomChart;
