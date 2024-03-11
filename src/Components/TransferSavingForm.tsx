import { ChangeEvent, FormEvent } from "react";
import { Button } from "./Button";

type TransferSavingFormProps = {
  handelSaving: (e: FormEvent) => void;
  handelTransfer: (e: ChangeEvent<HTMLInputElement>) => void;
};
export function TransferSavingForm({
  handelSaving,
  handelTransfer,
}: TransferSavingFormProps) {
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
