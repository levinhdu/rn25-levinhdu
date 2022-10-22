import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import style from './style.module.css'

interface IBlockUi03{
    icon?: string,
    content?: string,
    likes?: string,
    bgColor?: string
}

function BlockUi03(props: IBlockUi03) {
  return (
    <>
        <div className={style.blockUi} style={{backgroundColor: props.bgColor}}>
            <div className={style.blockIcon}>
                <i className={`fa-brands ${props.icon} ${style.bgIcon}`} ></i>
            </div>
            <div className={style.blockContent}>
                <p className={style.text}>{props.content}</p>
                <p className={style.likes}>{props.likes} Likes</p>
            </div>
        </div>
    </>
  )
}

export default BlockUi03