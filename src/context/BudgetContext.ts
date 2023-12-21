import { Dispatch, createContext } from "react";

import { BudgetAction } from './actions/index';
import { Expense } from './../interfaces/index';


export interface BudgetState {
    currentValue: number;
    isLogged: boolean;
    expenses: Expense[];
    currentActive: Expense | null;
    filtered: Expense[] | null;
}

export const initialState: BudgetState = {
    currentValue: 0,
    isLogged: false,
    expenses: [],
    currentActive: null,
    filtered: null
};

export interface BudgetContextType {
    state: BudgetState,
    dispatch: Dispatch<BudgetAction>
}

export const BudgetContext = createContext<BudgetContextType>({
    state: initialState,
    dispatch: () => null
});