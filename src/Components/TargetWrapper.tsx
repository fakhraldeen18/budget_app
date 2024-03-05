import { useState } from "react";
import { TargetForm } from "./TargetForm";
import { TransferSaveingWrapper } from "./TransferSaveingWrapper";

export function TargetWrapper({ TransferSaving }) {
  const [target, setTarget] = useState(0);
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
      <p>Currnt saving : {TransferSaving}</p>
      
      {/* <ul>
        {income.map((income) => {
          return (
            <li key={income.source}>
              <p> {income.source} </p>
              <p>{income.amount} </p>
              <p> {income.date}</p>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
}
