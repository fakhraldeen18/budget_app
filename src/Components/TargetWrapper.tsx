import { ChangeEvent, FormEvent, useState } from "react";
import { TargetForm } from "./TargetForm";

type TargetWrapperProps = {
  setTarget: React.Dispatch<React.SetStateAction<number>>;
  target: number;
  totalSavingTransfer: number;
};

export function TargetWrapper({
  target,
  setTarget,
  totalSavingTransfer,
}: TargetWrapperProps) {
  const handelReset = (e: FormEvent) => {
    e.preventDefault();
    setTarget(0);
  };
  const handelTarget = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTarget(+value);
  };
  return (
    <section className="income-form">
      <TargetForm
        handelTarget={handelTarget}
        handelReset={handelReset}
        target={target}
      />
      <p>Target: {target}</p>
      <p>Current saving: {totalSavingTransfer}</p>
    </section>
  );
}
