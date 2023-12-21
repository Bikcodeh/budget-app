import { ChangeEvent } from "react";
import { useBudgetContext } from "../hooks/useBudgetContext";

export const Filters = () => {

  const {state, dispatch} = useBudgetContext();

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == '') {
        dispatch({ type: 'clear_filtered'})
    } else {
        dispatch({ type: 'filter_expenses', payload: e.target.value})
    }
  }
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filter by</label>
          <select name = "category" onChange={handleFilter}>
            <option value=""> -- Select --</option>
            <option value="food">Food</option>
            <option value="hobby">Hooby</option>
            <option value="movies">Movies</option>
            <option value="home">Home</option>
          </select>
        </div>
      </form>
    </div>
  );
};
