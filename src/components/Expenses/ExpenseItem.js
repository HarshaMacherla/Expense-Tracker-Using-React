import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  const amountHandler = () => {
    setAmount(100.0);
    console.log(amount);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Expense</button>
    </Card>
  );
};

export default ExpenseItem;
