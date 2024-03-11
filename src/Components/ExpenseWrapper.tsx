import "../App.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "./From";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
  handleDeleteExpense: (id: number) => void;
};

const Inputs_Expense = [
  {
    label: "Expense source",
    id: "source",
    name: "source",
    type: "text",
  },
  {
    label: "Amount of expense",
    id: "amount",
    name: "amount",
    type: "number",
  },
];
export function ExpenseWrapper({
  expenses,
  setExpenses,
  handleDeleteExpense,
}: ExpenseWrapperProps) {
  const [expense, setExpense] = useState({
    id: +new Date(),
    source: "",
    amount: 0,
    date: "",
  });
  const handleSubmitExpense = (e: FormEvent) => {
    e.preventDefault();
    setExpenses([...expenses, { ...expense, id: +new Date() }]);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setExpense({ ...expense, date: value });
  };
  return (
    <section className="expenses-form">
      <Form
        handleSubmit={handleSubmitExpense}
        handleChange={handleChange}
        handleDate={handleDate}
        title="Add expense"
        inputs={Inputs_Expense}
      />
      <ListItems items={expenses} handleDelete={handleDeleteExpense} />
    </section>
  );
}
