import { useMemo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { moneyFormatter } from "../helpers";
import { useBudgetContext } from "../hooks/useBudgetContext";

export const BudgetControl = () => {
  const { state, dispatch } = useBudgetContext();
  const { currentValue, expenses } = state;
  const totalSpent = useMemo(
    () =>
      expenses.reduce(
        (total, expense) => Number(total) + Number(expense.amount),
        0
      ),
    [expenses]
  );

  const percentajeSpent = useMemo(
    () => +(((currentValue - (currentValue - totalSpent)) / currentValue) * 100).toFixed(2),
    [expenses]
  );

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div style={{ alignSelf: 'center'}}>
        <CircularProgressbar
          value={percentajeSpent}
          text={`${percentajeSpent}% Spent`}
          styles={buildStyles({
            pathColor: percentajeSpent > 100 ? '#DC2626' : '#3B82F6',
            textColor: percentajeSpent > 100 ? '#DC2626' : '#3B82F6',
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" onClick={() => dispatch({ type: 'reset' })}>
          Restart budget
        </button>
        <p>
          <span>Budget: </span>
          {moneyFormatter(currentValue.toString())}
        </p>
        <p className={currentValue - totalSpent < 0 ? `error` : ""}>
          <span>Available: </span>
          {moneyFormatter((currentValue - totalSpent).toString())}
        </p>
        <p>
          <span>Spent: </span>
          {moneyFormatter(totalSpent.toString())}
        </p>
      </div>
    </div>
  );
};
