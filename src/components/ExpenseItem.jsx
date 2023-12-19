import { formatDate } from "../helpers";
import FoodIcon from "../assets/icono_comida.svg";
import HomeIcon from "../assets/icono_casa.svg";
import HobbyIcon from "../assets/icono_ocio.svg";
import SubscriptionIcon from "../assets/icono_suscripciones.svg";

const categoryDictionary = {
  food: FoodIcon,
  movies: SubscriptionIcon,
  home: HomeIcon,
  hobby: HobbyIcon,
};

export const ExpenseItem = (expense) => {
  const { id, date, amount, description, category } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={categoryDictionary[category]} alt={category} />
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
