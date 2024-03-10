import { Button } from "./Button";

export function IncomeForm({ handleSubmitIncome, handleChange, handleDate }) {
  return (
    <form onSubmit={handleSubmitIncome}>
      <div>
        <div>
          <label htmlFor="source">Income source</label>
          <input
            id="source"
            name="source"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
      <label htmlFor="amount">Amount of income</label>
      <input type="number" id="amount" name="amount" onChange={handleChange} />
      <div>
        <div>
          <label htmlFor="date">Date of income</label>
          <input type="date" id="date" onChange={handleDate} />
        </div>
      </div>
      <Button title="Add income" />
    </form>
  );
}
