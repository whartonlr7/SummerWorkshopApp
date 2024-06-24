import { NavLink } from 'react-router-dom';
import logo from '../assets/images/SandCherry_CatalizeResults_tagline__WHITE.svg';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-bold hover:bg-sky-900 text-white hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-sky-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className='bg-sky-950 border-b'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Sand Cherry Logo' />
            
            </NavLink>
            <div className='md:ml-auto'>
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