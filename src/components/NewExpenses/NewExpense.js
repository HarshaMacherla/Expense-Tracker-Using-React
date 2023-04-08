import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddingNewExpense={props.onAddingNewExpense} />
    </div>
  );
};

export default NewExpense;
