import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    let title = document.getElementById("title").value;
    console.log(title);
  };

  const amountChangeHandler = () => {
    let amount = document.getElementById("amount").value;
    console.log(amount);
  };

  const dateChangeHandler = () => {
    let date = document.getElementById("date").value;
    console.log(date);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} id="title" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            id="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            step="2023-04-05"
            onChange={dateChangeHandler}
            id="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
