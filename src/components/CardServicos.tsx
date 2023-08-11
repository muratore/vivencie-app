import Image from "next/image"
export interface CardServicosProps {
    titulo: string 
    texto: string 
    imagem?: any
    alt: string
    className?:string
}

const CardServicos = (props:CardServicosProps) => {
  return (
    <div className={`${props.className ?? ''} lg:flex  items-center gap-2 w-full text-white`}>
        <div className="w-full lg:w-[40%] lg:pr-8" >
        <h3 className=" font-light text-xl md:text-4xl mb-6">
            {props.titulo}
        </h3>
        <p className=" mb-4 lg:text-lg font-light">
            {props.texto}
        </p>

        </div>
        

        <Image className={`w-full h-[350px] mb-4 lg:w-[60%] object-cover`} src={props.imagem} alt={props.alt}/>
       

    </div>
  )
}

export default CardServicos