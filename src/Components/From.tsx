import { Button } from "./Button";

type FormProps = {
  title: string;
  label: string;
  handleSubmit: any;
  onSubmit: any;
  register: any;
  errors: any;
};
export function Form({
  title,
  handleSubmit,
  onSubmit,
  register,
  errors,
  label,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <label htmlFor="source">{label} source</label>
          <input
            id="source"
            type="text"
            name="source"
            {...register("source")}
          />
        </div>
        {errors.source && <span>{errors.source.message}</span>}
      </div>

      <div>
        <div>
          <label htmlFor="amount">Amount of {label}</label>
          <input
            id="amount"
            type="number"
            name="amount"
            {...register("amount", {
              valueAsNumber: true,
            })}
          />
        </div>
        {errors.amount && <span>{errors.amount.message}</span>}
      </div>
      <div>
        <div>
          <label htmlFor="date">Date of expense</label>
          <input
            type="date"
            id="date"
            name="date"
            {...register("date", {
              valueAsDate: true,
            })}
          />
        </div>
        {errors.date && <span>{errors.date.message}</span>}
      </div>
      <Button title={title} />
    </form>
  );
}
