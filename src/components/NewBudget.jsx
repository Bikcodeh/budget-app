import { useContext } from 'react'
import { BudgetContext } from '../context/budgetContext'

export const NewBudget = () => {

  const {value, updateValue} = useContext(BudgetContext);

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Add your budget'
                    value={value}
                    onChange={e => updateValue(e.target.value)}
                />
            </div>
            <input type='submit' value='Add' />
        </form>
    </div>
  )
}
