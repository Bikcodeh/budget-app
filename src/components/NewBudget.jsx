import { useContext, useState } from 'react'
import { BudgetContext } from '../context/budgetContext'
import { AlertMessage } from './AlertMessage';

export const NewBudget = () => {

  const [message, setMessage] = useState('');
  const {currentValue, updateValue, handleSession} = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Number(currentValue) || currentValue < 0)  {
      setMessage('Value is invalid')
      return
    } else {
      setMessage('')
      localStorage.setItem('hasData', 'true');
      localStorage.setItem('budgetMoney', currentValue);
      handleSession(true);
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra animate__animated animate__zoomIn'>
        <form onSubmit={handleSubmit} className='formulario'>
            <div className='campo'>
                <span>Define budget</span>
                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Add your budget'
                    value={currentValue}
                    onChange={e => updateValue(e.target.value)}
                />
            </div>
            <input type='submit' value='Add' />
            { message && <AlertMessage type='error'>{ message }</AlertMessage> }
        </form>
    </div>
  )
}
