import { Expense } from './../../interfaces/index';

export interface UpdateValueAction {
    type: 'update_value';
    payload: number;
}

export interface AddExpenseAction {
    type: 'add_expense';
    payload: Expense;
}

export interface DeleteExpenseAction {
    type: 'delete_expense';
    payload: {
        id: string;
    };
}

export interface EditExpenseAction {
    type: 'edit_expense';
    payload: Expense;
}

export interface SetExpenseActiveAction {
    type: 'set_expense_active';
    payload: Expense | null;
}

export interface FilterExpensesAction {
    type: 'filter_expenses';
    payload: string;
}

export interface ClearFilteredAction {
    type: 'clear_filtered';
}

export interface ResetAction {
    type: 'reset';
}

export interface HandleSessionAction {
    type: 'handle_session';
    payload: boolean;
}

export type BudgetAction = UpdateValueAction |
    AddExpenseAction |
    EditExpenseAction |
    DeleteExpenseAction |
    SetExpenseActiveAction |
    FilterExpensesAction |
    ClearFilteredAction |
    ResetAction |
    HandleSessionAction;