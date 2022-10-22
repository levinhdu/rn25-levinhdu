import React, { Component } from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import style from './style.module.css'


type Props = {}

interface State{
    like: boolean
}

class LikesClass extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
        like: false
    }
  }
  handleLike = () =>{
    this.setState({like: !this.state.like})
  }

  render() {
    return (
    <div className={style.blockBtnLike} onClick={this.handleLike}> 
        <div className={style.btnLike}>
            <span>{this.state.like ? <AiFillLike style={{color:'#1877F2'}}/> : <AiOutlineLike/>}</span>
        </div>
        <div className={style.text}>
            <span style={this.state.like ? {color:'#1877F2'} : {}}>Like</span>
        </div>
    </div>
    )
  }
}

export default LikesClass