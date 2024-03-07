import { useState } from "react";
import { Button } from "./Button";

export function TargetForm({ handelTarget, handelReset, target }) {
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