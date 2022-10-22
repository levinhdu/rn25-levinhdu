import React from 'react'

type Props = {}

function From({}: Props) {
    const handleOnChang = (e: React.ChangeEvent<HTMLInputElement>) =>{
        return console.log(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChang}/>
        <input type="password" />
        <input type="checkbox" name={'checkbox1'}/>
        <input type="checkbox" name={'checkbox1'}/>
        <input type="checkbox" name={'checkbox1'}/>
        <input type="radio" name={'radio1'}/>
        <input type="radio" name={'radio1'}/>
        <input type="radio" name={'radio1'}/>
        <input type="submit" />
        
    </form>
    </>
  )
}

export default From