import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import AppointmentDetail from './components/AppointmentDetail'
import { useState } from 'react'

// we're going to create something similar to what you created in M3
// an agenda application, with details, routes, hooks,etc.

function App() {
  const [filter, setFilter] = useState('')

  return (
    <BrowserRouter>
      <MyNavbar filter={filter} setFilter={setFilter} />
      <Routes>
        <Route path='/' element={<HomePage filter={filter} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/details/:appointmentId' element={<AppointmentDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
