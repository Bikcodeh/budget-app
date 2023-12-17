import { useState } from "react";
import { BudgetContext } from "./budgetContext";

const initialState = {
  currentValue: 0,
  isLogged: false,
};

export const BudgetProvider = ({ children }) => {
  const [budgetState, setBudgetState] = useState(initialState);

  const updateValue = (newValue) => {
    setBudgetState((state) => ({
      ...state,
      currentValue: newValue,
    }));
  };

  const handleSession = (allowAccess = false) => {
    setBudgetState((state) => ({
      ...state,
      isLogged: allowAccess,
    }));
  };
  return (
    <BudgetContext.Provider
      value={{ ...budgetState, updateValue, handleSession }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
