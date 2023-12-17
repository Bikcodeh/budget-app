import { NewBudget } from "./NewBudget";

export const Header = () => {
  return (
    <header className="header">
      <h1>Expense Planner</h1>
      <NewBudget />
    </header>
  );
};
