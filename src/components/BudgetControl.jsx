import { useContext, useEffect, useMemo, useState } from "react";
import { BudgetContext } from "../context/budgetContext";
import { moneyFormatter } from "../helpers";

export const BudgetControl = () => {
  const { currentValue, expenses } = useContext(BudgetContext);
  const totalSpent = useMemo(() => expenses.reduce((total, expense) => Number(total) + Number(expense.amount), 0), [expenses])
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafico Aqui</p>
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
