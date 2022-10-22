import React, { Component } from 'react'

type Props = {}

type State = {
    stateNumber: number,
    coutDown: boolean
}

class index extends Component<Props, State> {
  constructor(props: Props){
    super(props)

    this.state = {
        stateNumber: 0,
        coutDown: true
    }
  }

  handleClick = () =>{
    this.setState({stateNumber: this.state.stateNumber + 1})
  }

  resetNumber = () =>{
    this.setState({stateNumber: 0})
  }

  countDownClick = () =>{
    this.setState({coutDown: !this.state.coutDown})
  }

  render() {
    return (
      <>
        <div className="m-auto text-center mt-3">
            <div>{this.state.stateNumber}</div>
            <button onClick={this.handleClick}>Click</button>
            <button className='ms-3' onClick={this.resetNumber}>Reset</button>
            <br />
            <div>{!this.state.coutDown}</div>
            <button className='mt-5' onClick={this.countDownClick}>
                {this.state.coutDown ? 'Start Countdown' : 'Close Countdown'}
            </button>
        </div>
      </>
    )
  }
}

export default index