import { useState } from "react";
import { TransferSavingForm } from "./TransferSavingForm";
import { TargetWrapper } from "./TargetWrapper";

export function TransferSavingWrapper({
  setTransfer,
  transfer,
  setSavingTransfer,
  savingTransfer,
  balance,
}) {
  const handelSaving = (e) => {
    e.preventDefault();
    setSavingTransfer(transfer);
  };
  const handelTransfer = (e) => {
    const value = e.target.value;
    setTransfer(value);
  };
  return (
    <section>
      <p>Current balance : {balance}</p>
      <p>Current saving: {savingTransfer}</p>
      <TransferSavingForm
        handelSaving={handelSaving}
        handelTransfer={handelTransfer}
      />
    </section>
  );
}
