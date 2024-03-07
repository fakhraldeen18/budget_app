import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "../App.css";
export function ExpenseWrapper({ expenses, setExpenses, expense, setExpense }) {
  const handleExpense = (e: any) => {
    e.preventDefault();
    setExpenses([...expenses, expense]);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };
  const handleDate = (e: any) => {
    const value = e.target.value;
    setExpense({ ...expense, date: value });
  };
  return (
    <section className="expenses-form">
      <ExpenseForm
        handleExpense={handleExpense}
        handleChange={handleChange}
        handleDate={handleDate}
      />

      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.source}>
              <p> {expense.source} </p>
              <p>{expense.amount} </p>
              <p> {expense.date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
