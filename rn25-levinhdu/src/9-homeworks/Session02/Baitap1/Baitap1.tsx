import React from 'react'
import clothingImg from '../basic-images/1.jpg'
import style from './index.module.css'

type Props = {}

function Baitap1({}: Props) {
  return (
    <div className={`${style.product}`}>
      <div className=''>
        <img src={clothingImg} alt="Khong co anh" />
      </div>
      <div className='mt-3'>
        <h4>Clothing & Apparel</h4>
        <p className='mt-4 text-secondary'>Accessories</p>
        <p className='mt-3 text-secondary'>Bags</p>
        <p className='mt-3 text-secondary'>Kid's Fashion</p>
        <p className='mt-3 text-secondary'>Mens</p>
      </div>
    </div>
  )
}

export default Baitap1