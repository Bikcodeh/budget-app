import { useContext, useState } from 'react'
import { BudgetContext } from '../context/budgetContext'
import { AlertMessage } from './AlertMessage';
import { useBudgetContext } from '../hooks/useBudgetContext';
import { BUDGET_ACTIONS } from '../context/budgetReducer';

export const NewBudget = () => {

  const [message, setMessage] = useState('');
  const {state, dispatch} = useBudgetContext();
  const { currentValue } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(currentValue) || currentValue < 0)  {
      setMessage('Value is invalid')
      return
    } else {
      setMessage('')
      localStorage.setItem('hasData', 'true');
      localStorage.setItem('budgetMoney', currentValue);
      dispatch({ type: BUDGET_ACTIONS.HANDLE_SESSION, payload: true});
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra animate__animated animate__zoomIn'>
        <form onSubmit={handleSubmit} className='formulario'>
            <div className='campo'>
                <label>Define budget</label>
                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Add your budget'
                    value={currentValue}
                    onChange={e => dispatch({type: BUDGET_ACTIONS.UPDATE_VALUE, payload: e.target.value})}
                />
            </div>
            <input type='submit' value='Add' />
            { message && <AlertMessage type='error'>{ message }</AlertMessage> }
        </form>
    </div>
  )
}
