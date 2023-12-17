import { useContext, useState } from 'react'
import { BudgetContext } from '../context/budgetContext'
import { AlertMessage } from './AlertMessage';

export const NewBudget = () => {

  const [message, setMessage] = useState('');
  const {currentValue, updateValue} = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentValue < 0 || !Number(currentValue))  {
      console.log('error')
      setMessage('Value is invalid')
    } else {
      console.log('bien');
      setMessage('')
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleSubmit} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
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
