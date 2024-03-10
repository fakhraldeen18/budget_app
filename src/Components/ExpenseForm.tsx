import React from "react";
import { Button } from "./Button";

export function ExpenseForm({ handleSubmitExpense, handleChange, handleDate }) {
  return (
    <form onSubmit={handleSubmitExpense}>
      <div>
        <div>
          <label htmlFor="source">Expense source</label>
          <input
            id="source"
            type="text"
            name="source"
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor="amount">Amount of expense</label>
      <input type="number" id="amount" name="amount" onChange={handleChange} />
      <div>
        <div>
          <label htmlFor="date">Date of expense</label>
          <input type="date" id="date" onChange={handleDate} />
        </div>
      </div>
      <Button title="Add expense" />
    </form>
  );
}
