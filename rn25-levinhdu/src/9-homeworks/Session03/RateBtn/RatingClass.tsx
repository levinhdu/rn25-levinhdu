import React, { Component } from 'react'

type Props = {}
const arrStar = [1, 2, 3, 4, 5]
type State = {
    star: number,
}

class RatingClass extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
        star: 0
    }
  }


  render() {
    return (
        <div>
        {arrStar?.map((index) => {
          return index <= this.state.star ? (
            <i
              key={index}
              onClick={() => this.setState({star: index})}
              className="fa-solid fa-star"
              style={{ color: "#fdf508" }}
            ></i>
          ) : (
            <i
              key={index}
              onClick={() => this.setState({star: index})}
              className="fa-regular fa-star"
            ></i>
          );
        })}
      </div>
    )
  }
}

export default RatingClass