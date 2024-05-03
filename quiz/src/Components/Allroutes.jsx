import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import Quiz from './Quiz'
import Result from './Result'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/quit' element={<Result/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes