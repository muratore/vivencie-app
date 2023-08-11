import Link from 'next/link'
import React from 'react'
export interface ContatoProps{
    titulo:string 
    url:string 
    icone:any
    textoLink:string
} 

const ContatoCard = (props:ContatoProps) => {
  return (
    <Link href={props.url} className={`flex flex-col items-center bg-white text-zinc-500 p-8 shadow-md`} >

        <div className='text-5xl'>{props.icone}</div>

        <h3>{props.titulo}</h3>
        <span className=' font-bold lg:text-xl'>

        {props.textoLink}
        </span>
        </Link>
  
  )
}

export default ContatoCard