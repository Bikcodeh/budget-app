import { Header } from "./components/Header";
import IconNewExpense from "./assets/nuevo-gasto.svg";
import { useContext, useState } from "react";
import { BudgetContext } from "./context/budgetContext";
import { Modal } from "./components/Modal";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleAddNewExpense = () => {
    setShowModal(true);
  };
  const { currentValue, isLogged } = useContext(BudgetContext);
  return (
    <div>
      <Header />
      {currentValue > 0 && isLogged && (
        <>
          <main>
            <ExpenseList />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewExpense}
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
