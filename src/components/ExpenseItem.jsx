import { formatDate } from "../helpers";

export const ExpenseItem = (expense) => {
  const { id, date, amount, description, category } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{description}</p>
          <p className="fecha-gasto">Added at: {formatDate(date)}</p>
        </div>
      </div>
      <p className="cantidad-gasto">${amount}</p>
    </div>
  );
};
