import { useBudgetContext } from "../hooks/useBudgetContext";
import { BUDGET_ACTIONS } from "../context/budgetReducer";

export const Filters = () => {

  const {state, dispatch} = useBudgetContext();

  const handleFilter = (e) => {
    if (e.target.value == '') {
        clearFiltered()
        dispatch({ type: BUDGET_ACTIONS.CLEAR_FILTERED})
    } else {
        dispatch({ type: BUDGET_ACTIONS.FILTER_EXPENSES, payload: e.target.value})
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
