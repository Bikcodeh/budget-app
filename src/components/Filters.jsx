import React, { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";

export const Filters = () => {

  const {filterExpenses, clearFiltered} = useContext(BudgetContext);

  const handleFilter = (e) => {
    if (e.target.value == '') {
        clearFiltered()
    } else {
        filterExpenses(e.target.value)
        console.log("VAMOS");
        console.log(e.target.value)
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
