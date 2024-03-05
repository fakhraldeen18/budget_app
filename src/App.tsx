import "./App.css";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";

function App() {
  return (
    <div>
      <h1 className="tital">Badget app</h1>
      <div className="contanir">
        <IncomeWrapper />
        <ExpenseWrapper />
      </div>
    </div>
  );
}

export default App;
