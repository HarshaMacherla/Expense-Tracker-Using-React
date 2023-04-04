import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenseItems = [];

  for (let i = 1, j = 0; i <= 100; i++, j += 5) {
    expenseItems.push(
      <ExpenseItem
        title={"Expense " + i}
        location={"Hyderabad"}
        amount={100 + j}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
