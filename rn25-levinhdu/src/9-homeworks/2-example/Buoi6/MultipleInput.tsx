import React, { useState } from 'react'
import From from './From'

interface IUsers{
    name: string,
    password: string,
    gender: string,
    country: string
}

const defaultUser: IUsers = {
    name: 'levinhdu',
    password: '12345',
    gender: 'men',
    country: 'Viet Nam'
}

function MultipleInput() {
    const [user, setUser] = useState(defaultUser)
  return (
    <form >
        <input type="text" name='useName' placeholder='User Name'/>
    </form>
  )
}

export default MultipleInput