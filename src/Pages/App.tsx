import { useState } from "react";
import "../App.css";
import { Expense, ExpenseWrapper } from "../Components/ExpenseWrapper";
import { Income, IncomeWrapper } from "../Components/IncomeWrapper";
import { TransferSavingWrapper } from "../Components/TransferSavingWrapper";
import { TargetWrapper } from "../Components/TargetWrapper";
import { ProgressForm } from "../Components/ProgressForm";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Transaction } from "../Components/Transaction";

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

  const transactions = [...incomes, ...expenses];

  console.log("transactions:", transactions);

  const [savingTransfer, setSavingTransfer] = useState<Saving[]>([]);
  const totalSavingTransfer = savingTransfer.reduce(
    (acc, curr) => acc + Number(curr.saving),
    0
  );

  const balance = totalIncome - totalExpenses - totalSavingTransfer;
  const [target, setTarget] = useState(0);

  const progress = (totalSavingTransfer / target) * 100 || 0;

  const handleDeleteIncome = (id: number) => {
    const deleteIncome = incomes.filter((income) => income.id !== id);
    setIncomes(deleteIncome);
  };

  const handleDeleteExpense = (id: number) => {
    const deleteExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(deleteExpense);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1 className="title">Budget App</h1>
      <Grid container>
        <Grid xs={4}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            handleDeleteIncome={handleDeleteIncome}
          />
        </Grid>
        <Grid xs={4}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            handleDeleteExpense={handleDeleteExpense}
          />
        </Grid>
        <Grid xs={4}>
          <TargetWrapper
            setTarget={setTarget}
            target={target}
            totalSavingTransfer={totalSavingTransfer}
          />
          <ProgressForm progress={progress} />
        </Grid>
        <Grid xs={12}>
          <TransferSavingWrapper
            setSavingTransfer={setSavingTransfer}
            savingTransfer={savingTransfer}
            balance={balance}
          />
        </Grid>
        <Grid xs={12}>
          <Transaction transactions={transactions} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default App;
