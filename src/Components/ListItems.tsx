import { Expense } from "./ExpenseWrapper";
import { Income } from "./IncomeWrapper";

type ListItemsProps = {
  items: Expense[] | Income[];
  handleDelete: (id:number)=>void
};
export function ListItems({ items, handleDelete }: ListItemsProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p> {item.source} </p>
            <p>{item.amount} </p>
            <p> {item.date}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}