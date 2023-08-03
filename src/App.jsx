import { useEffect, useState } from 'react'
import DataProvider from './context/DataContext'
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"

import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Heroe from './pages/Heroe'

import { client } from './supabase/client'


function App() {

  const navigate = useNavigate()

  useEffect(() => {
    
    client.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate('/')
      }else{
        navigate('/home')
      }
    })
  }, [])

  return (

    <DataProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/home/:id" element={<Heroe />} />
        <Route path="/home/:id/*" element={<NotFound />} />
      </Routes>
    </DataProvider>
    
    
    
    
  )
}

export default App
