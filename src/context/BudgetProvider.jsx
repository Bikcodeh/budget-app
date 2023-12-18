import { useState } from "react";
import { BudgetContext } from "./budgetContext";

const initialState = {
  currentValue: localStorage.getItem("budgetMoney") ?? 0,
  isLogged: localStorage.getItem("hasData") ?? false,
  expenses: JSON.parse(localStorage.getItem("expenses")) ?? [],
};

export const BudgetProvider = ({ children }) => {
  const [budgetState, setBudgetState] = useState(initialState);

  const updateValue = (newValue) => {
    setBudgetState((state) => ({
      ...state,
      currentValue: newValue,
    }));
  };

  const addExpense = (expense) => {
    setBudgetState((state) => {
      const newSate = {
        ...state,
        expenses: [expense, ...state.expenses],
      };
      localStorage.setItem("expenses", JSON.stringify(newSate.expenses));
      return newSate;
    });
  };

  const handleSession = (allowAccess = false) => {
    setBudgetState((state) => ({
      ...state,
      isLogged: allowAccess,
    }));
  };
  return (
    <BudgetContext.Provider
      value={{ ...budgetState, updateValue, handleSession, addExpense }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
