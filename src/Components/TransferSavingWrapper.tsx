import { ChangeEvent, FormEvent, useState } from "react";
import { TransferSavingForm } from "./TransferSavingForm";
import { Saving } from "../Pages/App";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type TransferSavingWrapperProps = {
  setSavingTransfer: React.Dispatch<React.SetStateAction<Saving[]>>;
  savingTransfer: Saving[];
  balance: number;
};

export const UserSchema = z.object({
  saving: z.number().min(1, { message: "1 number or more " }),
});
type SavingUserSchema = z.infer<typeof UserSchema>;

export function TransferSavingWrapper({
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
  const [balanceError, setBalanceError] = useState("");

  const onSubmit = async (data: Saving) => {
    if (balance <= 0) {
      setBalanceError("you Don't have enough balance ");
      console.log("balanceError:", balanceError);
    } else {
      setSavingTransfer([...savingTransfer, data]);
      setBalanceError("");
    }
  };
  return (
    <section>
      <p>Current balance : {balance}</p>
      <TransferSavingForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        balanceError={balanceError}
      />
    </section>
  );
}
