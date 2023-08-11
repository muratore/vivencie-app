'use client'

import Link from "next/link"

export interface MenuItemProps {
    texto: string 
    url: string 
    selecionado?: boolean
    onClick?: ()=> void
    className?:string

}

const MenuItem = (props:MenuItemProps) => {
  return (
    <Link
    href={props.url}
    className={`flex px-2 py-2 w-full lg:w-28 lg:justify-center  bg-zinc-500 lg:bg-transparent text-sm hover:text-zinc-300 duration-300
    ${props.className ?? ""}
    ${props.selecionado ? 'text-white border-b-2 border-white' : 'text-white'}
    `}
    onClick={props.onClick}>
    {props.texto}
    
    </Link>
  )
}

export default MenuItem