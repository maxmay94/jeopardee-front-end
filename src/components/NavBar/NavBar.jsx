import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {
        user &&
        user.name === 'max' ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
            <li><Link to='/index'>View all questions</Link></li>
            <li><Link to='/add'>Add a question</Link></li>
            <li><Link to="/play">Play Jeopar-dee!</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            {/* hide login and signup links in future so only people in the know can create an account */}
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/play">Play Jeopar-dee!</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
