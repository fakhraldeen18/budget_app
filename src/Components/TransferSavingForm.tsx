import { Button } from "./Button";

export function TransferSavingForm({ handelSaving, handelTransfer }) {
  return (
    <form onSubmit={handelSaving}>
      <div>
        <label htmlFor="transfer">Transfer to saving account</label>
        <input type="number" id="transfer" onChange={handelTransfer} />
        <Button title="Transfer" />
      </div>
    </form>
  );
}
