import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  else if (props.items.length === 1)
    return [
      props.items.map((item) => (
        <ExpenseItem
          key={item.key}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      )),
      <h2 className="expenses-list__fallback">
        Only single Expense here. Please add more...
      </h2>,
    ];
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
