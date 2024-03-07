import { useState } from "react";
import "./App.css";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import { TransferSavingWrapper } from "./Components/TransferSavingWrapper";
import { TargetWrapper } from "./Components/TargetWrapper";

type Income = {
  source: string;
  amount: number;
  date: string;
};

type Expense = {
  source: string;
  amount: number;
  date: string;
};
function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const totalIncome = incomes.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expense, setExpense] = useState({
    source: "",
    amount: 0,
    date: "",
  });
  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const [transfer, setTransfer] = useState(0);
  const [savingTransfer, setSavingTransfer] = useState(0);


  console.log("balance", totalIncome - totalExpenses - savingTransfer);
  let balance = totalIncome - totalExpenses - savingTransfer;

  const [target, setTarget] = useState(0);

  // create useState to store the total income/expense

  // create a function called getTotalIncome(value)
  // setTotal(value)
  return (
    <div>
      <h1 className="title">Budget app</h1>
      <div className="container">
        <IncomeWrapper
          incomes={incomes}
          setIncomes={setIncomes}
          income={income}
          setIncome={setIncome}
        />
        <ExpenseWrapper
          expenses={expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
        <TargetWrapper setTarget={setTarget} target={target} />
        <TransferSavingWrapper
          transfer={transfer}
          setTransfer={setTransfer}
          setSavingTransfer={setSavingTransfer}
          savingTransfer={savingTransfer}
          balance={balance}
        />
      </div>
    </div>
  );
}
export default App;
