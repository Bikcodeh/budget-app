import { useReducer, ReactNode } from "react";
import { budgetReducer } from "./budgetReducer";
import { Expense } from "../interfaces";
import { BudgetContext, BudgetState, initialState } from "./budgetContext";

const initState = (): BudgetState=> {

  const currentValue = localStorage.getItem("budgetMoney")
  const userHasData = localStorage.getItem("hasData") || null
  const expensesFromStorage = localStorage.getItem("expenses")
  const expensesParsed = expensesFromStorage
    ? (JSON.parse(expensesFromStorage) as Expense[])
    : [];

  return {
    currentValue: currentValue ? Number(currentValue) : 0,
    isLogged: !!userHasData,
    expenses: expensesParsed,
    currentActive: null,
    filtered: null
  }
}

interface Props {
  children: ReactNode;
}


export const BudgetProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState, initState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
