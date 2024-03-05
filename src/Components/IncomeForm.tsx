import { Button } from "./Button";

export function IncomeForm({
  handeleIncome,
  handeleSource,
  handeleAmount,
  handeleDate,
}) {
  return (
    <form onSubmit={handeleIncome}>
      <div>
        <div>
          <label htmlFor="source">Income source</label>
          <input
            id="source"
            type="text"
            placeholder="Salary"
            onChange={handeleSource}
          />
        </div>
      </div>
      <label htmlFor="amount">Amount of income</label>
      <input type="number" id="amount" onChange={handeleAmount} />
      <div>
        <div>
          <label htmlFor="date">Date of income</label>
          <input type="date" id="date" onChange={handeleDate} />
        </div>
      </div>
      <Button tital="Add income" />
    </form>
  );
}
