import { useContext, useEffect } from "react";
import { NewBudget } from "./NewBudget";
import { BudgetContext } from "../context/budgetContext";
import { BudgetControl } from "./BudgetControl";

export const Header = () => {
  const { handleSession } = useContext(BudgetContext);
  const hasData = localStorage.getItem('hasData');

  const logout = () => {
    handleSession(false);
    localStorage.removeItem('hasData')
  }
  return (
    <header className="header">
      <h1>Expense Planner</h1>
      {/* { hasData ? <><button onClick={() => logout()}>Logout</button></> : <NewBudget />} */}
      { hasData ? <BudgetControl/> : <NewBudget />}
    </header>
  );
};
