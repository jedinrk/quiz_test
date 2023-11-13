import React from 'react'
import Image from 'next/image'
import EllipseTopRight from '../../assets/ellipse_top_right.svg'
import EllipseCenter from '../../assets/ellipse_center.svg'

function BackgroundComponent() {
  return (
    <div className='absolute w-screen	h-screen -z-1 opacity-60'>
      <Image src={EllipseTopRight} alt='bg-top-right' className='absolute top-0 right-0'/>
      <Image src={EllipseCenter} alt='bg-center' className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'/>
    </div>
  )
}

export default BackgroundComponent