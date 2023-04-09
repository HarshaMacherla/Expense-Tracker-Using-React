import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const setEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onClearingExpense={stopEditing}
          onAddingNewExpense={props.onAddingNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
