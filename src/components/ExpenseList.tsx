import { ExpenseItem } from "./ExpenseItem";
import { useBudgetContext } from "../hooks/useBudgetContext";

export const ExpenseList = () => {
  const {state, dispatch } = useBudgetContext();
  
  const { expenses, filtered } = state;

  return (
    <div className="listado-gastos contenedor">
      <h2>
        {expenses.length ? " Expenses" : "Your expenses will appear here"}
      </h2>
      {filtered
        ? filtered.map((expense) => (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              onDelete={() => dispatch({ type: 'delete_expense', payload: { id: expense.id}})}
              onClickItem={() => dispatch({ type: 'set_expense_active', payload: expense })}
            />
          ))
        : expenses.map((expense) => (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              onDelete={() => dispatch({type: 'delete_expense', payload: { id: expense.id}})}
              onClickItem={() => dispatch({ type: 'set_expense_active', payload: expense })}
            />
          ))}
    </div>
  );
};
