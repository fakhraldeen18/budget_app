import { ChangeEvent, FormEvent } from "react";
import { Button } from "./Button";


type TargetFormProps = {
  handelTarget: (e: ChangeEvent<HTMLInputElement>) => void;
  handelReset: (e: FormEvent) => void;
  target: number;
};

export function TargetForm({ handelTarget, handelReset, target }: TargetFormProps) {
  return (
    <form onSubmit={handelReset}>
      <div>
        <label htmlFor="target">set Target</label>
        <input
          type="text"
          name="target"
          id="target"
          onChange={handelTarget}
          value={target}
        />
      </div>
      <Button title="Reset" />
    </form>
  );
}