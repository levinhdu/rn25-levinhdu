import React from 'react'
import style from './style.module.css'

interface IBlockUi02{
  icon?: string,
  text?: string,
  percentage?: number,
  background?: string
}

function BlockUi02(props: IBlockUi02) {
  return (
    <>
      <div className={style.container}>
        <div className={style.icon_programming}>
          <div className={style.block_icon} style={{backgroundColor: props.background}}>
            <i className={`fa-brands ${props.icon} ${style.icon_html}`} ></i>
          </div>
          <span className={style.name_programming}>{props.text}</span>
        </div>
        <div className={style.progress}> 
          <span className={style.progress_line} style={{width: `${props.percentage}%`, backgroundColor: props.background}}></span>
        </div>
      </div>
    </>
  )
}

export default BlockUi02