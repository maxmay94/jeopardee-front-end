import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {
        user &&
        (user.name === 'max' ||  user.name === 'ted') &&
        <nav className='bg-blue-700 text-yellow-500 text-2xl'>
          <ul className='flex flex-wrap'>
            <li className='flex grow pl-5'><Link to="/changePassword">Change Password</Link></li>
            <li className='flex grow'><Link to='/index'>View and edit questions</Link></li>
            <li className='flex grow'><Link to='/add'>Add a question</Link></li>
            <li className='flex end pr-5'><Link to="" onClick={handleLogout}>Log out</Link></li>
          </ul>
        </nav>
      // :
      //   <nav>
      //     <ul>
      //       {/* hide login and signup links in future so only people in the know can create an account */}
      //       <li><Link to="/login">Log In</Link></li>
      //       <li><Link to="/signup">Sign Up</Link></li>
      //       <li><Link to="/">Play Jeopar-dee!</Link></li>
      //     </ul>
      //   </nav>
      }
    </>
  )
}

export default NavBar
