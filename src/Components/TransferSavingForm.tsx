import { ChangeEvent, FormEvent } from "react";
import { Button } from "./Button";

type TransferSavingFormProps = {
  handleSubmit: any;
  onSubmit: any;
  register: any;
  errors: any;
};
export function TransferSavingForm({
  handleSubmit,
  onSubmit,
  register,
  errors,
}: TransferSavingFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="saving">Transfer to saving account</label>
        <input
          type="number"
          id="saving"
          name="saving"
          {...register("saving", {
            valueAsNumber: true,
          })}
        />
        {errors.saving && <span>{errors.saving.message}</span>}
        <Button title="Transfer" />
      </div>
    </form>
  );
}
