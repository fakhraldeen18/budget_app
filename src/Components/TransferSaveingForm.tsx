import { Button } from "./Button";

export function TransferSaveingForm({ handelSaving, handelTransfer, TransferSaving }) {
  return (
    <form onSubmit={handelSaving}>
      <div>
        <label htmlFor="transfer">Transfer to saveing account</label>
        <input type="number" id="transfer" onChange={handelTransfer} />
        <Button tital="Transfer" />
      </div>
    </form>
  );
}
