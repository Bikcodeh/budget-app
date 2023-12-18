import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { moneyFormatter } from "../helpers";

export const BudgetControl = () => {

    const {currentValue} = useContext(BudgetContext);
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafico Aqui</p>
        </div>
        <div className='contenido-presupuesto'>
            <p><span>Budget: </span>{moneyFormatter(currentValue)}</p>
            <p><span>Available: </span>{moneyFormatter(currentValue)}</p>
            <p><span>Spent: </span>{moneyFormatter(currentValue)}</p>
        </div>
    </div>
  )
}
