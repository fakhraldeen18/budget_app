import "../App.css";
import { Form } from "./From";
import { ListItems } from "./ListItems";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
  handleDeleteIncome: (id: number) => void;
};
export type Income = {
  type?:string; 
   id: number;
  source: string;
  amount: number;
  date: string;
};

export const UserSchema = z.object({
  source: z.string().min(3, { message: "3 characters or more" }),
  amount: z.number().min(1, { message: "1 number or more " }),
  date: z.date().transform((val) => new Date(val).toLocaleDateString()),
});
type IncomeUserSchema = z.infer<typeof UserSchema>;

export function IncomeWrapper({
  incomes,
  setIncomes,
  handleDeleteIncome,
  
}: IncomeWrapperProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IncomeUserSchema>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: IncomeUserSchema) => {
    setIncomes([...incomes, { ...data, id: +new Date(),type:'income'}]);
  };
  return (
    <section className="incomes-form">
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        label="Income"
        title="Add income"
      />
      <ListItems items={incomes} handleDelete={handleDeleteIncome} />
    </section>
  );
}
