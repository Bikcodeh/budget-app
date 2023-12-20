import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";

export const useBudgetContext = () => {
    const context = useContext(BudgetContext);
    if (!context) {
      throw new Error('useBudgetContext must be use inside of a provider');
    }
    return context;
  };