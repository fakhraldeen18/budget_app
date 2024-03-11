import { ChangeEvent, FormEvent } from "react";
import { Button } from "./Button";

type Input = {
  label: string;
  id: string;
  name: string;
  type: string;
};
type FormProps = {
  handleSubmit: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDate: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  inputs: Input[];
};

export function Form({
  handleSubmit,
  handleChange,
  handleDate,
  title,
  inputs,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => {
        return (
          <div key={input.id}>
            <div>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                id={input.id}
                type={input.type}
                name={input.name}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <label htmlFor="date">Date of expense</label>
          <input type="date" id="date" onChange={handleDate} />
        </div>
      </div>
      <Button title={title} />
    </form>
  );
}
