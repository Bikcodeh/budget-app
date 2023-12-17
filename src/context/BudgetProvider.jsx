import { useState } from "react"
import { BudgetContext } from "./budgetContext";

const initialState = {
    currentValue: 0
}

export const BudgetProvider = ({ children }) => {
    const [value, setValue] = useState(0);

    const updateValue = (newValue) => {
        setValue(newValue);
    }
    return (
        <BudgetContext.Provider value={{value, updateValue}}>
            { children }
        </BudgetContext.Provider>
    )
}