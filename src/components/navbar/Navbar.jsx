import React, { useState } from 'react';
import { Link } from 'react-router';
import uk_icon from '../../assets/uk-icon.png';
import information from '../../assets/information.svg';
import { IoMdMenu } from "react-icons/io";
import { faBed, faCar, faChess, faHotel, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

  const [isShow, setIsShow] = useState( false );


  return (
    <>
      <div className='mx-auto max-w-[1024px] py-5 px-5 md:px-0 overflow-hidden'>
        <div className='flex justify-between items-center'>
          <Link to={ '/' } className='text-2xl font-bold'>Booking.com</Link>
          <button className='md:hidden' onClick={ () => setIsShow( true ) }>
            <IoMdMenu className='text-3xl' />
          </button>
          <div className='hidden md:flex items-center gap-3'>
            <p className='p-2 hover:bg-blue-800 rounded font-semibold cursor-pointer'>EUR</p>
            <img src={ uk_icon } alt="" width={ 40 } className='p-2 hover:bg-blue-800 cursor-pointer rounded' />
            <img src={ information } alt="" width={ 40 } className='p-2 hover:bg-blue-800 cursor-pointer rounded' />
            <p className='p-2 hover:bg-blue-800 cursor-pointer rounded font-medium'>List your property</p>
            <button className='py-1.5 px-3.5 text-blue-600 bg-white cursor-pointer rounded font-medium hover:bg-blue-50'>Register</button>
            <button className='py-1.5 px-3.5 text-blue-600 bg-white cursor-pointer rounded font-medium hover:bg-blue-50'>Sign in</button>
          </div>
        </div>

        <div className='hide-scrollbar flex gap-2 items-center mt-3 w-full overflow-x-scroll scroll whitespace-normal scroll-smooth'>

          <button className='flex gap-1.5 items-center py-2.5 px-4 border border-white rounded-3xl bg-blue-800/50 cursor-pointer'>
            <FontAwesomeIcon icon={ faBed } />
            <span className='text-sm'>Stays</span>
          </button>

          <button className='flex gap-1.5 items-center py-2.5 px-4 rounded-3xl hover:bg-blue-800 cursor-pointer'>
            <FontAwesomeIcon icon={ faPlane } />
            <span className='text-sm'>Flights</span>
          </button>

          <button className='flex gap-1.5 items-center py-2.5 px-4 rounded-3xl hover:bg-blue-800 cursor-pointer'>
            <FontAwesomeIcon icon={ faHotel } />
            <span className='text-sm'>Flight + Hotel</span>
          </button>

          <button className='flex gap-1.5 items-center py-2.5 px-4 rounded-3xl hover:bg-blue-800 cursor-pointer'>
            <FontAwesomeIcon icon={ faCar } />
            <span className='text-sm'>Car rentals</span>
          </button>

          <button className='flex gap-1.5 items-center py-2.5 px-4 rounded-3xl hover:bg-blue-800 cursor-pointer'>
            <FontAwesomeIcon icon={ faChess } />
            <span className='text-sm'>Activities</span>
          </button>

          <button className='flex gap-1.5 items-center py-2.5 px-4 rounded-3xl hover:bg-blue-800 cursor-pointer'>
            <FontAwesomeIcon icon={ faTaxi } />
            <span className='text-sm'>Airport taxis</span>
          </button>

        </div>
      </div>
      <div className={ isShow ? 'w-full h-screen absolute top-0 left-0 bg-white overflow-hidden transition-all duration-500 md:hidden ' : "translate-x-full absolute top-0 left-0 -right-2.5 hidden" }>
        <Sidebar setIsShow={ setIsShow } />
      </div>
    </>
  );
};

export default Navbar;