import React from "react";
import { Button } from "./Button";

export function ExpenseForm({
  handeleIncome,
  handeleSource,
  handeleAmount,
  handeleDate,
}) {
  return (
    <form onSubmit={handeleIncome}>
      <div>
        <div>
          <label htmlFor="source">Expense source</label>
          <input
            id="source"
            type="text"
            placeholder="Salary"
            onChange={handeleSource}
          />
        </div>
      </div>
      <label htmlFor="amount">Amount of expense</label>
      <input type="number" id="amount" onChange={handeleAmount} />
      <div>
        <div>
          <label htmlFor="date">Date of expense</label>
          <input type="date" id="date" onChange={handeleDate} />
        </div>
      </div>
      <Button tital="Add expense" />
    </form>
  );
}