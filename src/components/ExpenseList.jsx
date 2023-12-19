import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = () => {
  const { expenses, deleteExpense, setExpenseActive } =
    useContext(BudgetContext);

  const handleDeleteItem = (id) => {
    deleteExpense(id);
  };

  return (
    <div className="listado-gastos contenedor">
      <h2>
        {expenses.length ? " Expenses" : "Your expenses will appear here"}
      </h2>
      {expenses.map((expense) => (
        <ExpenseItem
          {...expense}
          key={expense.id}
          onDelete={() => handleDeleteItem(expense.id)}
          onClickItem={() => setExpenseActive(expense)}
        />
      ))}
    </div>
  );
};
