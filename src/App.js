import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenseItems = [
    {
      key: Math.random().toString(),
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 0, 4),
    },
    {
      key: Math.random().toString(),
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 3, 4),
    },
    {
      key: Math.random().toString(),
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 8, 4),
    },
    {
      key: Math.random().toString(),
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 2, 4),
    },
  ];

  const [expenses, setExpenseItems] = useState(expenseItems);

  const newExpenseHandler = (newExpense) => {
    setExpenseItems((expenses) => [...expenses, newExpense]);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddingNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
