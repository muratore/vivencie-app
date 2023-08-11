import React from 'react'
export interface RodapeProps {
    className?:string
}

const Rodape = (props:RodapeProps) => {
    const ano = new Date().getFullYear()
  return (
    <div className={`
    ${props.className ?? ""}
    flex justify-center text-xs bg-zinc-400 py-2`}>
      Copyright &copy; {ano} - Vivencie Residencial Sênior
    </div>
  )
}

export default Rodape