import { useReducer, useState } from "react";
import { BudgetContext } from "./budgetContext";
import { budgetReducer } from "./budgetReducer";

const initialState = {
  currentValue: localStorage.getItem("budgetMoney") ?? 0,
  isLogged: localStorage.getItem("hasData") ?? false,
  expenses: JSON.parse(localStorage.getItem("expenses")) ?? [],
  currentActive: null,
  filtered: null,
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
