import { useState } from "react";
import { TransferSaveingForm } from "./TransferSaveingForm";
import { TargetWrapper } from "./TargetWrapper";

export function TransferSaveingWrapper() {
  const [Transfer, setTransfer] = useState(0);
  const [TransferSaving, setTransferSaving] = useState(0);

  const handelSaving = (e) => {
    e.preventDefault();
    setTransferSaving(Transfer);
  };
  const handelTransfer = (e) => {
    const value = e.target.value;
    setTransfer(value);
  };
  return (
    <section>
      <TargetWrapper TransferSaving={TransferSaving} />
      {/* <p>Current saving: {TransferSaving}</p> */}
      <TransferSaveingForm
        handelSaving={handelSaving}
        handelTransfer={handelTransfer}
      />
    </section>
  );
}
