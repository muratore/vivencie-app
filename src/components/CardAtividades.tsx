import Image from "next/image"

export interface CardAtividadesProps {
    imagem:any 
    titulo:string
    alt:string
}

const CardAtividades = (props:CardAtividadesProps) => {
  return (
    <div className=" bg-white p-7 rounded-lg flex flex-col justify-center items-center">
       <Image className=" w-[100px] h-[100px] object-cover bg-vivencie rounded-full" src={props.imagem} alt={props.alt}/>
       <div className=" mt-3 text-xl">
        {props.titulo}
       </div>
    </div>
  )
}

export default CardAtividades