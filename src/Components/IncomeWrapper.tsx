import { useState } from "react";
import { IncomeForm } from "./IncomeForm";
import "../App.css";

export function IncomeWrapper({
  income,
  setIncome,
  incomes,
  setIncomes,
  setBalance,
  balance,
}) {
  const handleIncome = (e: any) => {
    e.preventDefault();
    setIncomes([...incomes, income]);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleDate = (e: any) => {
    const value = e.target.value;
    setIncome({ ...income, date: value });
  };
  // create a variable to  calculate the total amount of income
  // using useEffect to pass the total amount of income
  // useEffect(getTotalAmount(totalIncome))
  return (
    <section className="incomes-form">
      <IncomeForm
        handleIncome={handleIncome}
        handleChange={handleChange}
        handleDate={handleDate}
      />
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.source}>
              <p> {income.source} </p>
              <p>{income.amount} </p>
              <p> {income.date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
