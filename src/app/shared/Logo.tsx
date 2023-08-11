import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vivencie from 'public/assets/logo-branca.png'
const Logo = () => {
  return (
        <Link href={'/'} className='flex w-32 h-36 md:w-44 items-center  '>
            <Image className='  h-28 object-contain ' src={vivencie} alt='Logo Vivencie' property='{true}'/>
        </Link>
  )
}

export default Logo