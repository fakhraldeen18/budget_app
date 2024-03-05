import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "../App.css";
type Expense = {
  source: string;
  amount: number;
  date: string;
};
export function ExpenseWrapper({}) {
  const [expense, setExpense] = useState<Expense[]>([]);
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [incomeDate, setIncomeDate] = useState("");

  const handeleIncome = (e: any) => {
    e.preventDefault();
    setExpense([
      ...expense,
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
    <section className="expense-form">
      <ExpenseForm
        handeleIncome={handeleIncome}
        handeleSource={handeleSource}
        handeleAmount={handeleAmount}
        handeleDate={handeleDate}
      />

      <ul>
        {expense.map((expense) => {
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
