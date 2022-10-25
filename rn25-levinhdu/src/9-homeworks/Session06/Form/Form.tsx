import React, { useState } from 'react'
import './style.css'
import img from 'https://grovia.wpenginepowered.com/wp-content/uploads/2022/08/Grovia-HeroImage.png'

interface IUser{
    userName: string,
    password: string,
    remember: boolean
}

const defaulUser: IUser = {
    userName: '',
    password: '',
    remember: false
}

function Form() {
    const [user, setUser] = useState(defaulUser)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        return console.log(user)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "checkbox") {
            setUser((values) => ({
            ...values,
            [e.target.name]: e.target.checked,
          }));
        } else {
            setUser((values) => ({ ...values, [e.target.name]: e.target.value }));
        }
      };
  return (
    <>
    <div className='main mt-5'>
        <div className='blockImg'>
            <img src="https://grovia.wpenginepowered.com/wp-content/uploads/2022/08/Grovia-HeroImage.png" alt="" />
        </div>
        <div className='blockLogin'>
            <div className='logo'>
                <img src="https://app.grovia.io/Logo_Dark.svg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <h4>Sign in to your account</h4>
                <p>Thank you for using Grovia.</p>
                <hr />
                <div className='input'>
                    <label htmlFor="">Username</label><br />
                    <input type="email" onChange={handleChange} name='userName' placeholder='Email or Phone Number'/>
                </div>
                <div  className='input'>
                    <label htmlFor="">Password</label><br />
                    <input type="password" onChange={handleChange} name='password'  placeholder='Password'/>
                </div>
                <div className='checkbox'>
                    <div className='remember'>
                        <input type="checkbox" onChange={handleChange} name='remember' />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <a href="#">Reset password</a>
                </div>
                <div className='btnLogin'>
                    <button type='submit'>SIGN IN</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Form