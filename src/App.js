import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import Profile from './components/Profile'

// we're going to create something similar to what you created in M3
// an agenda application, with details, routes, hooks,etc.

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route
          path='/details/:appointmentId'
          element={<div>APPOINTMENTS DETAILS</div>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
