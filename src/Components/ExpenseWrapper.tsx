import "../App.css";
import { Form } from "./From";
import { ListItems } from "./ListItems";
import { z } from "zod"; // Add new import
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type Expense = {
  type?: string;
  id: number;
  source: string;
  amount: number;
  date: string;
};

type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
  handleDeleteExpense: (id: number) => void;
};

export const UserSchema = z.object({
  source: z.string().min(3, { message: "3 characters or more" }),
  amount: z.number().min(1, { message: "1 number or more " }),
  date: z.date().transform((val) => new Date(val).toLocaleDateString()),
});
type ExpenseUserSchema = z.infer<typeof UserSchema>;

export function ExpenseWrapper({
  expenses,
  setExpenses,
  handleDeleteExpense,
}: ExpenseWrapperProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Expense>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: Expense) => {
    setExpenses([...expenses, { ...data, id: +new Date() ,type: 'expense'}]);
  };
  return (
    <section className="expenses-form">
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        label="Expense"
        title="Add expense"
      />
      <ListItems items={expenses} handleDelete={handleDeleteExpense} />
    </section>
  );
}
