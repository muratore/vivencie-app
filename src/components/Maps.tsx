import React from 'react'
export interface MapsProps {
    full: boolean | undefined
}
const Maps = (props:MapsProps) => {
  return (
    <div>
         <iframe className='w-[300px] lg:w-[800px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2633901432523!2d-38.527551123990825!3d-3.7527266962211665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749e43ac65195%3A0x188795cf5a1ac3d6!2sVivencie%20Residencial%20S%C3%AAnior!5e0!3m2!1spt-BR!2sbr!4v1691182656131!5m2!1spt-BR!2sbr" 
         height="300" style={{border:"0"}} 
        allowFullScreen={props.full}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
    </div>
  )
}

export default Maps