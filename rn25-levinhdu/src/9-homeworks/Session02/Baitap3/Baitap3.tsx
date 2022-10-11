import React from 'react'
import technology from '../basic-images/3.jpg'
type Props = {}

function Baitap3({}: Props) {
  return (
    <div className='p-5' style={{width: '500px'}}>
        <div  >
            <img src={technology} alt="technology" width={'400px'} />
        </div>
        <div>
            <p className='text-secondary mt-4'>Technology</p>
            <h4 className='mb-4'>Harman Kadon Onys Studio Mini, Reviews & Experiences</h4>
            <span className='text-secondary'>Feb 21, 2021 by</span> <span>drfurion</span>
        </div>
    </div>
  )
}

export default Baitap3