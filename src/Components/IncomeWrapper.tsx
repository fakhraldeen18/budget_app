import { useState } from "react";
import { IncomeForm } from "./IncomeForm";
import "../App.css";

type Income = {
  source: string;
  amount: number;
  date: string;
};
export function IncomeWrapper() {
  const [income, setIncome] = useState<Income[]>([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");

  const handeleIncome = (e: any) => {
    e.preventDefault();
    setIncome([
      ...income,
      { source: source, amount: amount, date: incomeDate },
    ]);
  };
  const handeleSource = (e: any) => {
    const value = e.target.value;
    setSource(value);
  };

  const handeleAmount = (e: any) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handeleDate = (e: any) => {
    const value = e.target.value;
    setIncomeDate(value);
  };
  return (
    <section className="income-form">
      <IncomeForm
        handeleIncome={handeleIncome}
        handeleSource={handeleSource}
        handeleAmount={handeleAmount}
        handeleDate={handeleDate}
      />
      <ul>
        {income.map((income) => {
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