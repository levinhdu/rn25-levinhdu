import React from 'react'
import tivi from '../basic-images/2.jpg'

type Props = {}

function Baitap2({}: Props) {
  return (
    <div className='p-5' style={{width: '400px'}}>
        <div>
            <img src={tivi} alt="" />
        </div>
        <div>
            <p className='pb-2 border-bottom'>YOUNG SHOP</p>
            <h5 className='text-info'>Samsung UHD TV 24inch</h5>
            <i className="fa-sharp fa-solid fa-star text-warning me-2"></i>
            <i className="fa-sharp fa-solid fa-star text-warning me-2"></i>
            <i className="fa-sharp fa-solid fa-star text-warning me-2"></i>
            <i className="fa-sharp fa-solid fa-star text-warning me-2"></i>
            <i className="fa-regular fa-star text-secondary me-2"></i> 
            <span className='text-secondary'>02</span>
            <p>$599</p>
        </div>
    </div>
  )
}

export default Baitap2