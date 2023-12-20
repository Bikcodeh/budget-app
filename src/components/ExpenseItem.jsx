import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

const categoryDictionary = {
  food: 'assets/icons/icono_comida.svg',
  movies: 'assets/icons/icono_suscripciones.svg',
  home: 'assets/icons/icono_casa.svg',
  hobby: 'assets/icons/icono_ocio.svg',
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
