import React from 'react'


const Video = () => {
  return (
    <div className='bg-red-500 '>
       <video className=' object-conver' width="1400" autoPlay controls>
        <source
          src="assets/videos/Vivencie_videosite.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Video