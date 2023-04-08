import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenseItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 3, 4),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 3, 4),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 3, 4),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 3, 4),
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
