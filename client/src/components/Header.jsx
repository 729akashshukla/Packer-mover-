

import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <header className='bg-white-600 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-blue-600'>Packer and </span>
                <span className='text-gray-800'>Mover</span>
            </h1>
            </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search city' className='bg-transparent border-gray-300  focus:outline-none w-24 sm:w-64' />
            <FaSearch  className='text-gray-600'/>
        </form>
        <ul className='flex gap-4'>
            
          <Link to='/'>  <li className=' sm-inline text-slate-700 hover:underline'>Home</li></Link>
            <Link to='/about'><li className=' sm-inline text-slate-700 hover:underline'>About</li></Link>
            <Link to="/profile">  {currentUser ?(<img src={currentUser.avatar} alt="profile" className='w-10 h-10 rounded-full object-cover' />) : (
              <Link to='/sign-in'> <li className=' text-slate-700 hover:underline'>Sign In</li></Link>)}</Link>
           
        </ul>
        

        </div> 
    </header>
  )
}

export default Header
