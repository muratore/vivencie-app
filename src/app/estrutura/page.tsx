import React from 'react'
import Cabecalho from '../shared/Cabecalho'
import Rodape from '@/components/Rodape'
import foto1 from 'public/assets/local/foto-1.jpg'
import Image from 'next/image'
import foto2 from 'public/assets/local/jardim.jpg'
import foto3 from 'public/assets/local/jardim1.jpg'
import foto4 from 'public/assets/local/piscina.jpg'
import foto5 from 'public/assets/local/DJI_0096.jpg'
import foto6 from 'public/assets/local/DJI_0101.jpg'
import foto7 from 'public/assets/local/DJI_0524.jpg'
import foto8 from 'public/assets/local/DJI_0538.jpg'
import foto9 from 'public/assets/local/DJI_0566.jpg'
import foto10 from 'public/assets/local/DJI_0579.jpg'
import foto11 from 'public/assets/local/pilates.jpg'
import foto12 from 'public/assets/local/sala-estar.jpg'
import foto13 from 'public/assets/local/salao-beleza.jpg'
import foto14 from 'public/assets/local/area-externa.jpg'
import foto15 from 'public/assets/local/canteiro.jpg'
import Whatsapp from '../shared/Whatsapp'


const Estrutura = () => {
  
  return (
    <div>
    <div className="flex flex-col h-full min-h-screen bg-vivencie ">
        <Cabecalho className=' bg-vivencie shadow-md'/>
            
            <div className='flex-1 '>

              <div className={`absolute xl:-top-64  z-0  `}>
                <div className='mb-2'>

              <Image src={foto1} alt='Foto aérea do Residencial Vivencie' />
                </div>
              

              <div className='grid  m-auto lg:grid-cols-2  2xl:grid-cols-3 gap-2 '> 
              <Image src={foto2} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto3} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto4} alt='Foto da piscina no jardim' />
              <Image src={foto5} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto6} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto7} alt='Foto da piscina no jardim' />
              <Image src={foto8} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto9} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto10} alt='Foto aérea do Residencial Vivencie' />
              <Image src={foto11} alt='Studio de pilates' />
              <Image src={foto12} alt='Sala de estar' />
              <Image src={foto13} alt='Salão de Beleza' />
              <Image src={foto14} alt='Calçada externa com cadeiras confortáveis' />
              <Image src={foto15} alt='Canteiro no jardim externo' />

              </div>
              <Rodape className=' z-50'/>
              </div>
              
            </div>
       
           
    </div>
    <Whatsapp className=" fixed right-8 bottom-8"/>
    </div>
  )
}

export default Estrutura