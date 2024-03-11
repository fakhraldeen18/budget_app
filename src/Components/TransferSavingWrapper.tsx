import { ChangeEvent, FormEvent } from "react";
import { TransferSavingForm } from "./TransferSavingForm";
import { Saving } from "../App";

type TransferSavingWrapperProps = {
  transfer: {
    saving: number;
  };
  setTransfer: React.Dispatch<
    React.SetStateAction<{
      saving: number;
    }>
  >;
  setSavingTransfer: React.Dispatch<React.SetStateAction<Saving[]>>;
  savingTransfer: Saving[];
  balance: number;
  totalSavingTransfer: number;
};
export function TransferSavingWrapper({
  setTransfer,
  transfer,
  setSavingTransfer,
  savingTransfer,
  balance,
  totalSavingTransfer,
}: TransferSavingWrapperProps) {
  const handelSaving = (e: FormEvent) => {
    e.preventDefault();
    setSavingTransfer([...savingTransfer, transfer]);
  };
  const handelTransfer = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTransfer({ saving: +value });
  };
  return (
    <section>
      <p>Current balance : {balance}</p>
      <p>Current saving: {totalSavingTransfer}</p>
      <TransferSavingForm
        handelSaving={handelSaving}
        handelTransfer={handelTransfer}
      />
    </section>
  );
}
