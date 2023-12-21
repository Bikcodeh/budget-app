import { ChangeEvent, FormEvent, useState } from 'react'
import { AlertMessage } from './AlertMessage';
import { useBudgetContext } from '../hooks/useBudgetContext';

export const NewBudget = () => {

  const [message, setMessage] = useState('');
  const {state, dispatch} = useBudgetContext();
  const { currentValue } = state;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Number(currentValue) || currentValue < 0)  {
      setMessage('Value is invalid')
      return
    } else {
      setMessage('')
      localStorage.setItem('hasData', 'true');
      localStorage.setItem('budgetMoney', currentValue.toString());
      dispatch({ type: 'handle_session', payload: true});
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'update_value', payload: Number(e.target.value)})}
                />
            </div>
            <input type='submit' value='Add' />
            { message && <AlertMessage type='error'>{ message }</AlertMessage> }
        </form>
    </div>
  )
}
