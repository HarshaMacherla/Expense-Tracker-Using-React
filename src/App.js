import Expenses from "./components/Expenses/Expenses";

function App() {
  let expenseItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 3, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
