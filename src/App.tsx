import { useState } from "react";
import "./App.css";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import { TransferSavingWrapper } from "./Components/TransferSavingWrapper";
import { TargetWrapper } from "./Components/TargetWrapper";
import { ProgressForm } from "./Components/ProgressForm";



export type Saving = {
  saving: number;
};
function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const totalIncome = incomes.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const [expenses, setExpenses] = useState<Expense[]>([]);
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

  const handleDeleteIncome = (id:number) => {
    const deleteIncome = incomes.filter((income) => income.id !== id);
    setIncomes(deleteIncome);
  };

  const handleDeleteExpense = (id:number) => {
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
          handleDeleteIncome={handleDeleteIncome}
        />
        <ExpenseWrapper
          expenses={expenses}
          setExpenses={setExpenses}
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
