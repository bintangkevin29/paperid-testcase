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

  const data = React.useMemo(
    () => [
      {
        label: "Transaction",
        data: months.map((_, i) => {
          const getMonthToCount = transactionData.filter((td) => {
            const getMonth = new Date(td.created_at).getMonth();
            return getMonth === i;
          });

          const getTotal = getMonthToCount.reduce((a, b) => a + b.debit_amount, 0);
          return [months[i], getTotal];
        }),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      <Chart series={series} data={data} axes={axes} tooltip />
    </div>
  );
  // return <div className="customChart">Test</div>;
};

export default CustomChart;
