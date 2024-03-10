import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "../App.css";
export function ExpenseWrapper({
  expenses,
  setExpenses,
  expense,
  setExpense,
  handleDeleteExpense,
}) {
  const handleSubmitExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...expense, id: +new Date() }]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };
  const handleDate = (e) => {
    const value = e.target.value;
    setExpense({ ...expense, date: value });
  };
  return (
    <section className="expenses-form">
      <ExpenseForm
        handleSubmitExpense={handleSubmitExpense}
        handleChange={handleChange}
        handleDate={handleDate}
      />

      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <p> {expense.source} </p>
              <p>{expense.amount} </p>
              <p> {expense.date}</p>
              <button onClick={() => handleDeleteExpense(expense.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
