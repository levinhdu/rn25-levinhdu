import React,{useState, useEffect} from 'react'

type Props = {}

function Practive(props: Props) {
    const [count, setCount] = useState(1)
    const [like, setLike] = useState(true)

    useEffect(()=>{
        console.log("ComponentDidmount")
        return ()=>{
            console.log("ComponentWillUnmount")
        }
    },[])

    useEffect(()=>{
        console.log("ComponentDidUpdate")
    })

    useEffect(()=>{
        console.log("ComponentDidUpdate count")
    },[count])

    const handleClick = () =>{
        console.log("Clicked!!!")
        setCount(count+1)
    }
    const liveBtn = ()=>{
        setLike(!like)
    }
  return (
    <>
        <div>{count}</div>
        <button onClick={handleClick} disabled={count>=10 ? true : false}>Cong</button><br /><br />
        <button onClick={liveBtn}>{like ? 'Like' : 'Unlike'}</button>
    </>
  )
}

export default Practive