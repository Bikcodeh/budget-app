import { ExpenseItem } from "./ExpenseItem";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { BUDGET_ACTIONS } from "../context/budgetReducer";

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
              {...expense}
              key={expense.id}
              onDelete={() => dispatch({ type: BUDGET_ACTIONS.DELETE_EXPENSE, payload: expense.id})}
              onClickItem={() => dispatch({ type: BUDGET_ACTIONS.SET_EXPENSE_ACTIVE, payload: expense })}
            />
          ))
        : expenses.map((expense) => (
            <ExpenseItem
              {...expense}
              key={expense.id}
              onDelete={() => dispatch({type: BUDGET_ACTIONS.DELETE_EXPENSE, payload: expense.id})}
              onClickItem={() => dispatch({ type: BUDGET_ACTIONS.SET_EXPENSE_ACTIVE, payload: expense })}
            />
          ))}
    </div>
  );
};
