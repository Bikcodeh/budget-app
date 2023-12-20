import { NewBudget } from "./NewBudget";
import { BudgetControl } from "./BudgetControl";

export const Header = () => {
  const hasData = localStorage.getItem('hasData');

  return (
    <header className="header">
      <h1>Expense Planner</h1>
      { hasData ? <BudgetControl/> : <NewBudget />}
    </header>
  );
};
