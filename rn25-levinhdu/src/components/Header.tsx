import React, { Component } from 'react'

type Props = {
    headerProps: string,
    isloginProps: boolean
}

type State = {}

class Header extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div className="header bg-secondary fs-2 p-3 text-white">
        {this.props.headerProps}
        <button className='btn btn-success'>{this.props.isloginProps ? 'Logout' : 'Login'}</button>
      </div>
    )
  }
}

export default Header