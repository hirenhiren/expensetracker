import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ExpenseChart = ({ expenses }) => {
  const getTotalExpensePerType = () => {
    const expenseTypeMap = expenses.reduce((acc, expense) => {
      if (!acc[expense.ExpenseTyp]) {
        acc[expense.ExpenseTyp] = 0;
      }
      acc[expense.ExpenseTyp] += parseFloat(expense.ItemPrice);
      return acc;
    }, {});

    return {
      labels: Object.keys(expenseTypeMap),
      values: Object.values(expenseTypeMap),
    };
  };

  const { labels, values } = getTotalExpensePerType();

  const data = {
    labels,
    datasets: [
      {
        label: 'Expenses by Type',
        data: values,
        backgroundColor: '#9565e3',
        borderColor: '#9565e3',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full">
      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ₹${tooltipItem.raw}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ExpenseChart;
