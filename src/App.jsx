import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { ExpenseList } from "./components/ExpenseList";
import { Filters } from "./components/Filters";
import { useBudgetContext } from "./hooks/useBudgetContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleAddNewExpense = () => {
    setShowModal(true);
  };
  const  { state, dispatch } = useBudgetContext();
  const { currentValue, isLogged, currentActive } = state;
  console.log(state);
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
