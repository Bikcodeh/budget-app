import { useContext } from "react";
import { BudgetContext, BudgetContextType } from "../context/BudgetContext";

export const useBudgetContext = (): BudgetContextType => {
    const context = useContext(BudgetContext);
    if (!context) {
      throw new Error('useBudgetContext must be use inside of a provider');
    }
    return context;
  };