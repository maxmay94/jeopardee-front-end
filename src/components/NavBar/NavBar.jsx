import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {

  return (
    <>
      {
        user &&
        (user._id === '62729acf9e9a4de4b03de82f' || user._id === '6283155d0f980a0e5dc1f7a3') &&
        <nav className='bg-blue-700 text-yellow-500 text-2xl'>
          <ul className='flex flex-wrap'>
            <li className='flex grow pl-5'><Link to="/changePassword">Change Password</Link></li>
            <li className='flex grow'><Link to='/index'>View and edit questions</Link></li>
            <li className='flex grow'><Link to='/add'>Add a question</Link></li>
            <li className='flex end pr-5'><Link to="" onClick={handleLogout}>Log out</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar