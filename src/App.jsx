import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Restaurants from './Pages/Restaurants'
import Home from './Pages/Home'
import Works from './Pages/Works'
import Faqs from './Pages/Faqs'
import Layout from './Layout/Layout'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route element={<Restaurants/>} path='/restaurant'></Route>
                    <Route element={<About/>} path='/about'></Route>
                    <Route element={<Works/>} path='/works'></Route>
                    <Route element={<Faqs/>} path='/faqs'></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App