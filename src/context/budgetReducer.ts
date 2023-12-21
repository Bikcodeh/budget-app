import { BudgetAction } from './actions/index';
import { BudgetState } from './BudgetContext';

export const budgetReducer = (state: BudgetState, action: BudgetAction) => {
    switch (action.type) {
        case 'update_value':
            return {
                ...state,
                currentValue: action.payload
            }
            break;
        case 'add_expense':
            const newExpenses = [action.payload, ...state.expenses];
            localStorage.setItem('expenses', JSON.stringify(newExpenses));
            return { ...state, expenses: newExpenses };
            break;
        case 'delete_expense':
            const expensesFiltered = state.expenses.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('expenses', JSON.stringify(expensesFiltered));
            return { ...state, expenses: expensesFiltered };
            break;
        case 'edit_expense':
            return {
                ...state,
                expenses: state.expenses.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                )
            }
            break;
        case 'set_expense_active':
            return {
                ...state,
                currentActive: action.payload
            }
            break;
        case 'filter_expenses':
            return {
                ...state,
                filtered: state.expenses.filter(item => item.category == action.payload)
            }
            break;
        case 'clear_filtered':
            return {
                ...state,
                filtered: null
            }
            break;
        case 'reset':
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
        case 'handle_session':
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