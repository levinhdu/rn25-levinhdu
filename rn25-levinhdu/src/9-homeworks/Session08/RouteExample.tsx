import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import ListPage from './pages/ListPage'
import UpdateUser from './pages/UpdateUser'
import InputCustom from '../../Example/InputCustom/InputCustom'
import Navigation from './pages/Navigation'

function RouteExample() {
  return (
    <>
        <BrowserRouter>
        {/* Navigation */}
            <Navigation/>
        {/* Routers Setting */}
            <Routes>
                <Route path='/' element={<ListPage/>}/>
                <Route path='/create' element={<InputCustom/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/updateUser/:id" element={<UpdateUser/>}/>

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

export default RouteExample