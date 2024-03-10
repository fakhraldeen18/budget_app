import { useState } from "react";
import { IncomeForm } from "./IncomeForm";
import "../App.css";

export function IncomeWrapper({
  income,
  setIncome,
  incomes,
  setIncomes,
  handleDeleteIncome,
}) {
  const handleSubmitIncome = (e) => {
    e.preventDefault();
    setIncomes([...incomes, { ...income, id: +new Date() }]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleDate = (e) => {
    const value = e.target.value;
    setIncome({ ...income, date: value });
  };
  return (
    <section className="incomes-form">
      <IncomeForm
        handleSubmitIncome={handleSubmitIncome}
        handleChange={handleChange}
        handleDate={handleDate}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              <p> {income.source} </p>
              <p>{income.amount} </p>
              <p> {income.date}</p>
              <button onClick={() => handleDeleteIncome(income.id)}> Delete </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
