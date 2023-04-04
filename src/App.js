import Expenses from "./components/Expenses/Expenses";

function App() {
  let expenseItems = [
    {
      id: "e1",
      title: "New Table",
      amount: 5000,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e2",
      title: "New Desk",
      amount: 15000,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e3",
      title: "New Chair",
      amount: 6000,
      date: new Date(2023, 3, 4),
    },
    {
      id: "e4",
      title: "New Laptop",
      amount: 150000,
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
