
import Hero from '../components/Hero'
import { NavLink } from 'react-router-dom';
import schedule from '../schedule.json';

import scaimage1 from '../assets/images/scaimage3.jpeg'
import scaimage2 from '../assets/images/scaimage2.jpeg'
import bottomLogo from '../assets/images/SandCherry2.svg'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <div className='flex w-full z-0'>
      <NavLink to='/schedule' className='hover:rounded-md hover:z-10 w-full aspect-square transform transition-transform hover:scale-105 bg-cover bg-center h-screen' style={{ backgroundImage:`url(${scaimage1})`  }}>
        <h1 className = 'm-3 text-xxl sm:text-3xl md:text-4xl font-bold text-white text-center pb-20'>Workshop Schedule</h1>
        <div className = 'm-6'>
          <h2 className = 'm-3 text-xl sm:text-2xl md:text-3xl font-bold text-white'>Upcoming Events:</h2>
          {schedule.map((event) => (
            <h3 className = 'text-white font-bold m-3 ml-8'>{event.time}: {event.event}</h3>
          ))}
          <h3 class="m-3 ml-8 text-white font-bold hover:text-stone-300 transform transition-transform">
            ...See More
          </h3>
        </div>
      </NavLink>

      <NavLink to='/directory' className='hover:rounded-md hover:z-10 w-full aspect-square bg-neutral-400 transform transition-transform hover:scale-105 bg-cover bg-center h-screen' style={{ backgroundImage:`url(${scaimage2})` }}>
        <h1 className = 'm-3 text-xxl sm:text-3xl md:text-4xl font-bold text-white text-center pb-20'>Employee Directory</h1>
        <h2 className = "m-3 ml-8 text-xl sm:text-2xl md:text-3xl text-white font-bold hover:text-stone-300 transform transition-transform ">See the new company facebook here</h2>
      </NavLink>
    </div>
    <div className='min-h-30 w-full bg-sky-950 z-20 items-center z-20'>
      <img className='h-10 w-auto' src={bottomLogo} alt='Sand Cherry Logo' />
    </div>
    </>
  )
}

export default HomePage
