import { ChangeEvent, FormEvent, useState } from "react";
import "../App.css";
import { Form } from "./From";
import { ListItems } from "./ListItems";

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
  handleDeleteIncome: (id: number) => void;
};
export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string;
};

const Inputs_Income = [
  {
    label: "Income source",
    id: "source",
    name: "source",
    type: "text",
  },
  {
    label: "Amount of income",
    id: "amount",
    name: "amount",
    type: "number",
  },
];

export function IncomeWrapper({
  incomes,
  setIncomes,
  handleDeleteIncome,
}: IncomeWrapperProps) {
  const [income, setIncome] = useState({
    id: +new Date(),
    source: "",
    amount: 0,
    date: "",
  });
  const handleSubmitIncome = (e: FormEvent) => {
    e.preventDefault();
    setIncomes([...incomes, { ...income, id: +new Date() }]);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIncome({ ...income, date: value });
  };
  return (
    <section className="incomes-form">
      <Form
        handleSubmit={handleSubmitIncome}
        handleChange={handleChange}
        handleDate={handleDate}
        title="Add income"
        inputs={Inputs_Income}
      />
      <ListItems items={incomes} handleDelete={handleDeleteIncome} />
    </section>
  );
}
