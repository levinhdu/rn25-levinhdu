import React from 'react'
import styles from "./style.module.css"


interface ChartBarProps {
  text?: string;
  color1?: string;
  color2?: string;
  percentage?: number;
}

function BlockUi01(props: ChartBarProps) {
  return (
    <>
    <div className={styles.container} >
        <div className={styles.col_left} style={{backgroundColor: props.color1}}>
          <span>{props.text}</span>
        </div>
        <div className={styles.col_right} >
          <div style={{backgroundColor: props.color2, width: `${props.percentage}%`}}>{props.percentage}%</div>
        </div>
    </div>
      
    </>
  )
}

export default BlockUi01