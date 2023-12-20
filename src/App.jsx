import { Header } from "./components/Header";
import { useContext, useEffect, useState } from "react";
import { BudgetContext } from "./context/budgetContext";
import { Modal } from "./components/Modal";
import { ExpenseList } from "./components/ExpenseList";
import { Filters } from "./components/Filters";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleAddNewExpense = () => {
    setShowModal(true);
  };
  const { currentValue, isLogged, currentActive } = useContext(BudgetContext);
  useEffect(() => {
    if (!!currentActive) {
      setShowModal(true);
    }
  }, [currentActive]);

  return (
    <div>
      <Header />
      {currentValue > 0 && isLogged && (
        <>
          <main>
            <Filters />
            <ExpenseList />
          </main>
          <div className="nuevo-gasto">
            <img
              src={'assets/icons/nuevo-gasto.svg'}
              alt="New Expense"
              onClick={handleAddNewExpense}
            />
          </div>
        </>
      )}
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
