import { ChangeEvent, FormEvent } from "react";
import { TransferSavingForm } from "./TransferSavingForm";
import { Saving } from "../Pages/App";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type TransferSavingWrapperProps = {
  transfer: {
    saving: number;
  };
  setTransfer: React.Dispatch<
    React.SetStateAction<{
      saving: number;
    }>
  >;
  setSavingTransfer: React.Dispatch<React.SetStateAction<Saving[]>>;
  savingTransfer: Saving[];
  balance: number;
};

export const UserSchema = z.object({
  saving: z.number().min(1, { message: "1 number or more " })
});
type SavingUserSchema = z.infer<typeof UserSchema>;


export function TransferSavingWrapper({
  setTransfer,
  transfer,
  setSavingTransfer,
  savingTransfer,
  balance,
}: TransferSavingWrapperProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Saving>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: Saving) => {
    console.log("SUCCESS", data);
    setSavingTransfer([...savingTransfer, data]);
  };

  return (
    <section>
      <p>Current balance : {balance}</p>
      <TransferSavingForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </section>
  );
}
