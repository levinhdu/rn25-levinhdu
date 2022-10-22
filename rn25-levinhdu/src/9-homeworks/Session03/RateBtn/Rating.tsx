import React, { useState } from "react";

type Props = {};
const MAX_STAR = 5;

function Rating({}: Props) {
  const [star, setStar] = useState(0);
  const arrStar = [1, 2, 3, 4, 5];
  // const renderStar = () =>{
  //     let result = []
  //     for(let index = 0;index<star;index++){
  //         result.push(<span key={index} onClick={()=> setStar(index+1)}><i className="fa-solid fa-star" style={{color:'#fdf508'}}></i></span>)
  //     }
  //     for(let index = star; index < MAX_STAR;index++){
  //         result.push(<span key={index} onClick={()=> setStar(index+1)}><i className="fa-regular fa-star"></i></span>)
  //     }
  //     return result
  // }
  return (
    <div>
      {arrStar?.map((index) => {
        return index <= star ? (
          <i
            key={index}
            onClick={() => setStar(index)}
            className="fa-solid fa-star"
            style={{ color: "#fdf508" }}
          ></i>
        ) : (
          <i
            key={index}
            onClick={() => setStar(index)}
            className="fa-regular fa-star"
          ></i>
        );
      })}
    </div>
  );
}

export default Rating;
