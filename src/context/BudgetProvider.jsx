import { useState } from "react"
import { BudgetContext } from "./budgetContext";

const initialState = {
    currentValue: 0
}

export const BudgetProvider = ({ children }) => {
    const [budgetState, setBudgetState] = useState(initialState);

    const updateValue = (newValue) => {
        setBudgetState(state => ({
            ...state,
            currentValue: newValue
        }));
    }
    return (
        <BudgetContext.Provider value={{...budgetState, updateValue}}>
            { children }
        </BudgetContext.Provider>
    )
}