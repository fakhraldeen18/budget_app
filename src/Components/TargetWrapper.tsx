import { useState } from "react";
import { TargetForm } from "./TargetForm";
import { TransferSaveingWrapper } from "./TransferSavingWrapper";

export function TargetWrapper({target, setTarget}) {


  const handelReset = (e) => {
    e.preventDefault();
    setTarget(0);
  };
  const handelTarget = (e) => {
    const value = e.target.value;
    setTarget(value);
  };
  return (
    <section className="income-form">
      <TargetForm
        handelTarget={handelTarget}
        handelReset={handelReset}
        target={target}
      />
      <p>Target: {target}</p>
    </section>
  );
}
