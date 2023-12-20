import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";
import FoodIcon from "/assets/icons/icono_comida.svg";
import HomeIcon from "/assets/icons/icono_casa.svg";
import HobbyIcon from "/assets/icons/icono_ocio.svg";
import SubscriptionIcon from "/assets/icons/icono_suscripciones.svg";

const categoryDictionary = {
  food: FoodIcon,
  movies: SubscriptionIcon,
  home: HomeIcon,
  hobby: HobbyIcon,
};

export const ExpenseItem = (props) => {
  const { date, amount, description, category, onDelete, onClickItem } = props;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => onClickItem()}>
        Edit
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => onDelete()}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};
