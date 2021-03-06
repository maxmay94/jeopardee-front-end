import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import QuestionIndex from './pages/QuestionIndex/QuestionIndex'
import AddQuestion from './pages/AddQuestion/AddQuestion'
import GameBoard from './pages/GameBoard/GameBoard'
import { startGame } from './services/questionService'
import * as authService from './services/authService'
import EditQuestion from './pages/EditQuestion/EditQuestion'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='bg-blue-900'>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>

        {/* <Route path="/" element={<Landing user={user} />} /> */}

        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />

        <Route 
          path='/index'
          element={user ? <QuestionIndex user={user} /> : <Navigate to="/login" />}
        />

        <Route 
          path='/add'
          element={user ? <AddQuestion user={user} /> : <Navigate to="/login" />}
        />

        <Route 
          path='/:id/edit'
          element={user ? <EditQuestion user={user} /> : <Navigate to="/login" />}
        />

        <Route 
          path='/'
          // element={ <Navigate to="/play" /> }
          element={<GameBoard startGame={startGame} />} // RETURN TO THIS
        />

      </Routes>
    </div>
  )
}

export default App
