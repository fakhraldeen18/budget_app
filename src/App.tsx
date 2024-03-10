import { useState } from "react";
import "./App.css";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import { TransferSavingWrapper } from "./Components/TransferSavingWrapper";
import { TargetWrapper } from "./Components/TargetWrapper";
import { ProgressWrapper } from "./Components/ProgressWrapper";
import { ProgressForm } from "./Components/ProgressForm";

type Income = {
  id?: number;
  source: string;
  amount: number;
  date: string;
};

type Expense = {
  id?: number;
  source: string;
  amount: number;
  date: string;
};

type Saving = {
  saving: number;
};
function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState({
    id: +new Date(),
    source: "",
    amount: 0,
    date: "",
  });
  const totalIncome = incomes.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  console.log("incomes", incomes);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expense, setExpense] = useState({
    id: +new Date(),
    source: "",
    amount: 0,
    date: "",
  });
  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const [savingTransfer, setSavingTransfer] = useState<Saving[]>([]);
  const [transfer, setTransfer] = useState({ saving: 0 });
  const totalSavingTransfer = savingTransfer.reduce(
    (acc, curr) => acc + Number(curr.saving),
    0
  );

  const balance = totalIncome - totalExpenses - totalSavingTransfer;
  const [target, setTarget] = useState(0);

  const progress = (totalSavingTransfer / target) * 100 || 0;

  const handleDeleteIncome = (id) => {
    const deleteIncome = incomes.filter((income) => income.id !== id);
    setIncomes(deleteIncome);
  };

  const handleDeleteExpense = (id) => {
    const deleteExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(deleteExpense);
  };

  return (
    <div>
      <h1 className="title">Budget app</h1>
      <div className="container">
        <IncomeWrapper
          incomes={incomes}
          setIncomes={setIncomes}
          income={income}
          setIncome={setIncome}
          handleDeleteIncome={handleDeleteIncome}
        />
        <ExpenseWrapper
          expenses={expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          handleDeleteExpense={handleDeleteExpense}
        />
        <TargetWrapper setTarget={setTarget} target={target} />
        <TransferSavingWrapper
          transfer={transfer}
          setTransfer={setTransfer}
          setSavingTransfer={setSavingTransfer}
          savingTransfer={savingTransfer}
          balance={balance}
          totalSavingTransfer={totalSavingTransfer}
        />
        <ProgressForm progress={progress} />
      </div>
    </div>
  );
}
export default App;
