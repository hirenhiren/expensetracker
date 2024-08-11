import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';

const ExpenseDashboard = ({ expenses }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedExpenseType, setSelectedExpenseType] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleExpenseTypeChange = (event) => {
    setSelectedExpenseType(event.target.value);
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesDate = selectedDate ? new Date(expense.ItemDT).toISOString().split('T')[0] === selectedDate : true;
    const matchesType = selectedExpenseType ? expense.ExpenseTyp === selectedExpenseType : true;
    return matchesDate && matchesType;
  });

  return (
    <div className='animate text-[#052f5f] mt-8 bg-[#f5f7fd] p-4 shadow-lg shadow-stone-500/50'>
      <h2 className="text-3xl lg:text-4xl font-light mb-4">Expenses Report</h2>
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-2">
          <label htmlFor="itemDateField" className="block text-sm font-medium text-gray-700">Date</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
            id="itemDateField"
            className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="expenseTypeField" className="block text-sm font-medium text-gray-700">Expense Type</label>
          <select 
            value={selectedExpenseType} 
            onChange={handleExpenseTypeChange} 
            id="expenseTypeField"
            className="block w-full appearance-none focus:outline-none bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-slate-400 focus:border-t-white focus:ring-0 transition duration-200"
          >
            <option value="">All</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Medicine">Medicine</option>
            <option value="OtherExp">Other</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <ExpenseChart expenses={filteredExpenses} />
      </div>
    </div>
  );
};

export default ExpenseDashboard;
