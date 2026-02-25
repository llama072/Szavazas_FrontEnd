import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<HomePage/>}/>
    <Route path='/login' element= {<LoginPage/>}/>
    <Route path='/registration' element= {<RegistrationPage/>}/>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
