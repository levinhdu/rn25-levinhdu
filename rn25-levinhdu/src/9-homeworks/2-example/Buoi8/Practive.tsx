import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import ListPage from './pages/ListPage'
import './style.css'
import InputCustom from '../../../Example/InputCustom/InputCustom'
import Form from '../../Session06/Form/Form'

function Practive() {
  return (
    <>
        
        <BrowserRouter>
        {/* Navigation */}
            <div className='nav '>
                <ul className=''>
                    <li className=''>
                        <Link to='/'  className='link'>List</Link>
                    </li>
                    <li>
                        <Link to='/form'  className='link'>Form</Link>
                    </li>
                    <li>
                        <Link to='/detail'  className='link'>Detail</Link>
                    </li>
                </ul>
            </div>
        {/* Routers Setting */}
            <Routes>
                <Route path='/' element={<ListPage/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/detail' element={<Detail/>}/>

                {/* NO MATCH ROUTE */}
                <Route
                    path='*'
                    element={
                    <main style={{ padding: '1rem' }}>
                        <p>404 Page not found 😂😂😂</p>
                    </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Practive