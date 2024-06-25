import { NavLink } from 'react-router-dom';
import logo from '../assets/images/SandCherry_CatalizeResults_tagline__WHITE.svg';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-bold transform transition-transform hover:scale-110 text-white hover:text-white rounded-md px-3 py-2'
      : 'transform transition-transform hover:scale-110 text-white hover:text-white rounded-md px-3 py-2';


  return (
    <nav className='bg-sky-950 border-b'>

      <div className='mx-0 px-1 sm:px-1 lg:px-1 w-full'>
        <div className='flex h-20 items-center justify-between mx-0 w-full px-1 sm:px-1 lg:px-1'>
          <div className='flex flex-1 items-center justify-center'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Sand Cherry Logo' />
              
            
            </NavLink>
            <div className='ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/schedule' className={linkClass}>
                  Schedule
                </NavLink>
                <NavLink to='/directory' className={linkClass}>
                  Directory
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;