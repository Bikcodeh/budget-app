export const BUDGET_ACTIONS = {
    UPDATE_VALUE: 'update_value',
    ADD_EXPENSE: 'add_expense',
    DELETE_EXPENSE: 'delete_expense',
    EDIT_EXPENSE: 'edit_expense',
    SET_EXPENSE_ACTIVE: 'set_expense_active',
    FILTER_EXPENSES: 'filter_expenses',
    CLEAR_FILTERED: 'clear_filtered',
    RESET: 'reset',
    HANDLE_SESSION: 'handle_session'
}

export const budgetReducer = (state, action) => {
    switch (action.type) {
        case BUDGET_ACTIONS.UPDATE_VALUE:
            return {
                ...state,
                currentValue: action.payload
            }
            break;
        case BUDGET_ACTIONS.ADD_EXPENSE:
            const newExpenses = [action.payload, ...state.expenses];
            localStorage.setItem('expenses', JSON.stringify(newExpenses));
            return { ...state, expenses: newExpenses };
            break;
        case BUDGET_ACTIONS.DELETE_EXPENSE:
            const expensesFiltered = state.expenses.filter((item) => item.id !== id)
            localStorage.setItem('expenses', JSON.stringify(expensesFiltered));
            return { ...state, expenses: expensesFiltered };
            break;
        case BUDGET_ACTIONS.EDIT_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.map((item) =>
                    item.id === expense.id ? expense : item
                )
            }
            break;
        case BUDGET_ACTIONS.SET_EXPENSE_ACTIVE:
            return {
                ...state,
                currentActive: action.payload
            }
            break;
        case BUDGET_ACTIONS.FILTER_EXPENSES:
            return {
                ...state,
                filtered: state.expenses.filter(item => item.category == category)
            }
            break;
        case BUDGET_ACTIONS.CLEAR_FILTERED:
            return {
                ...state,
                filtered: null
            }
            break;
        case BUDGET_ACTIONS.RESET:
            localStorage.removeItem('hasData')
            localStorage.removeItem('budgetMoney')
            localStorage.removeItem('expenses')
            return {
                currentValue: 0,
                isLogged: false,
                expenses: [],
                currentActive: null,
                filtered: null
            }
            break;
        case BUDGET_ACTIONS.HANDLE_SESSION:
            return {
                ...state,
                isLogged: action.payload
            }
            break;
        default:
            return state;
            break;
    }
}