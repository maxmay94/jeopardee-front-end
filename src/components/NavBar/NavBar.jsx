import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {user.name === 'max' ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to='/index'>View all questions</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
