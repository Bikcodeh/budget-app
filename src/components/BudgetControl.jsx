import { useContext, useMemo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { BudgetContext } from "../context/budgetContext";
import { moneyFormatter } from "../helpers";

export const BudgetControl = () => {
  const { currentValue, expenses } = useContext(BudgetContext);
  const totalSpent = useMemo(
    () =>
      expenses.reduce(
        (total, expense) => Number(total) + Number(expense.amount),
        0
      ),
    [expenses]
  );

  const percentajeSpent = useMemo(() => ((totalSpent / currentValue) * 100).toFixed(2), [expenses])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentajeSpent}
          text={`${percentajeSpent}% Spent`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span>
          {moneyFormatter(currentValue)}
        </p>
        <p>
          <span>Available: </span>
          {moneyFormatter(currentValue - totalSpent)}
        </p>
        <p>
          <span>Spent: </span>
          {moneyFormatter(totalSpent)}
        </p>
      </div>
    </div>
  );
};
