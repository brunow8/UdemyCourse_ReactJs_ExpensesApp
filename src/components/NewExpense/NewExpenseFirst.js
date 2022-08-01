import React from "react";
import "../../css/NewExpenseForm.css";
import "../../css/NewExpense.css";

const NewExpenseFirst = (props) => {
  const onButtonHandler = (e) => {
    e.preventDefault();
    props.onShowHandler();
  };
  return (
    <div className="new-expense">
      <div className="new-expense__controls-firstTab">
        <div className="new-expense__actions">
          <button onClick={onButtonHandler}>Add New Expense</button>
        </div>
      </div>
    </div>
  );
};

export default NewExpenseFirst;
