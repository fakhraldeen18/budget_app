import "./App.css";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";
import { TransferSaveingWrapper } from "./Components/TransferSaveingWrapper";

function App() {
  return (
    <div>
      <h1 className="tital">Badget app</h1>
      <div className="contanir">
        <IncomeWrapper />
        <ExpenseWrapper />
        <TransferSaveingWrapper/>
      </div>
    </div>
  );
}

export default App;
