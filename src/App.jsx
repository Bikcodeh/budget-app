import { Header } from "./components/Header"
import { BudgetProvider } from "./context/BudgetProvider"

function App() {
  return (
    <BudgetProvider>
      <Header />
    </BudgetProvider>
  )
}

export default App
