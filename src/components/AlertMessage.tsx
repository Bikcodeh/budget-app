import { ReactNode } from "react"

interface Props {
  children: ReactNode;
  type: string;
}

export const AlertMessage = ({children, type}: Props) => {
  return (
    <div className={`alerta ${type} animate__animated animate__fadeIn animate__fast`}>{ children }</div>
  )
}