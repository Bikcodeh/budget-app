export const AlertMessage = ({children, type}) => {
  return (
    <div className={`alerta ${type} animate__animated animate__fadeIn animate__fast`}>{ children }</div>
  )
}