import { useState } from "react";
import { TransferSavingForm } from "./TransferSavingForm";
import { TargetWrapper } from "./TargetWrapper";

export function TransferSavingWrapper({
  setTransfer,
  transfer,
  setSavingTransfer,
  savingTransfer,
  balance,
  totalSavingTransfer,
}) {
  const handelSaving = (e) => {
    e.preventDefault();
    setSavingTransfer([...savingTransfer, transfer]);
  };
  const handelTransfer = (e) => {
    const value = e.target.value;
    setTransfer({ saving: value });
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
