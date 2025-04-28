import React from 'react';
import { MdClose } from "react-icons/md";
import uk_icon from '../../assets/uk-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faHandshake, faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons';
import information from '../../assets/information.svg';

const Sidebar = ( { setIsShow } ) => {
  return (
    <div className='text-black p-5'>
      <div className='flex justify-end'>
        <button onClick={ () => setIsShow( false ) }>
          <MdClose className='text-3xl font-bold' />
        </button>
      </div>

      <h2 className='text-2xl font-bold'>More</h2>

      <div className='flex flex-col gap-5 my-5'>

        <div className='flex gap-5 items-center'>
          <span>EUR</span>
          <p>Euro</p>
        </div>

        <div className='flex gap-5 items-center'>
          <img src={ uk_icon } alt="uk icon" width={ 30 } />
          <p>English (UK)</p>
        </div>

        <div className='flex gap-5 items-center'>
          <FontAwesomeIcon icon={ faG } size='2xl' />
          <p>Genious loyalty programme</p>
        </div>

        <div className='flex gap-5 items-center'>
          <FontAwesomeIcon icon={ faHouse } size='xl' />
          <p>List your property</p>
        </div>

      </div>

      <h2 className='text-xl font-medium mt-7'>Help and support</h2>

      <div className='flex flex-col gap-5 my-5'>

        <div className='flex gap-6 items-center'>
          <FontAwesomeIcon icon={ faQuestion } size='2xl' />
          <p>Contact Customer Service</p>
        </div>

        <div className='flex gap-6 items-center'>
          <FontAwesomeIcon icon={ faHandshake } />
          <p>Dispute resolution</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;