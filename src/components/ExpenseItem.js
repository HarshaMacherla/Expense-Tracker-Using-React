import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenseDate = new Date(2023, 3, 4);
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
