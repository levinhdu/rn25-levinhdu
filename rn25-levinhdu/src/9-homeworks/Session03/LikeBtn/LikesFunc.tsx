import React, { useState } from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import style from './style.module.css'
type Props = {}

function LikesFunc({}: Props) {
  const [like, setLike] = useState(false)
  const handleLike = () =>{
    return setLike(!like)
  }
  return (
    <>
    <div className={style.blockBtnLike} onClick={handleLike}> 
        <div className={style.btnLike}>
            <span>{like ? <AiFillLike style={{color:'#1877F2'}}/> : <AiOutlineLike/>}</span>
        </div>
        <div className={style.text}>
            <span style={like ? {color:'#1877F2'} : {}}>Like</span>
        </div>
    </div>
    </>
  )
}

export default LikesFunc