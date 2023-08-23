import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/ExpenseItem";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tissue",
    amount: 150,
    date: new Date(2021, 5, 12)
  },
  {
    id: "e2", 
    title: "Laptop",
    amount: 15999.00,
    date: new Date(2020, 7, 7)
  },
  {
    id: "e3",
    title: "Mobile",
    amount: 59999.50,
    date: new Date(2022, 4, 9)
  },
  {
    id: "e4",
    title: "Earpods",
    amount: 8000.00,
    date: new Date(2001, 9, 18)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense= {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  }
export default App;