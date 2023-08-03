import { useEffect } from 'react'
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom"

import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import { client } from './supabase/client'

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    console.log('App.js')
    client.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate('/')
      }else{
        navigate('/home')
      }
    })
  }, [])

  return (
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<NotFound />} />
      </Routes>
    
    
    
  )
}

export default App
