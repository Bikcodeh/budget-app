import { useState } from "react";
import { BudgetContext } from "./budgetContext";

const initialState = {
  currentValue: localStorage.getItem("budgetMoney") ?? 0,
  isLogged: localStorage.getItem("hasData") ?? false,
  expenses: JSON.parse(localStorage.getItem("expenses")) ?? [],
  currentActive: null,
  filtered: null,
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

  const deleteExpense = (id) => {
    setBudgetState((state) => {
      const newState = {
        ...state,
        expenses: state.expenses.filter((item) => item.id !== id),
      };
      localStorage.setItem("expenses", JSON.stringify(newState.expenses));
      return newState;
    });
  };

  const handleSession = (allowAccess = false) => {
    setBudgetState((state) => ({
      ...state,
      isLogged: allowAccess,
    }));
  };

  const setExpenseActive = (expense) => {
    setBudgetState((state) => ({
      ...state,
      currentActive: expense,
    }));
  };

  const editExpense = (expense) => {
    setBudgetState((state) => ({
      ...state,
      expenses: state.expenses.map((item) =>
        item.id === expense.id ? expense : item
      ),
    }));
  };
  const filterExpenses = (category) => {
    setBudgetState((state) => ({
        ...state,
        filtered: state.expenses.filter(item => item.category == category)
    }));
  };

  const clearFiltered = () => {
    setBudgetState(state => ({
      ...state,
      filtered: null
    }))
  }
  return (
    <BudgetContext.Provider
      value={{
        ...budgetState,
        updateValue,
        handleSession,
        addExpense,
        editExpense,
        deleteExpense,
        setExpenseActive,
        filterExpenses,
        clearFiltered
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
