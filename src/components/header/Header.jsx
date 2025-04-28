import React from 'react';

const Header = () => {
  return (
    <div className='h-[50vh] relative'>
      <img srcset="https://r-xx.bstatic.com/xdata/images/xphoto/720x217/494555314.jpeg?k=1f633b0c5d2f95a79e2b8a44dca04e401d5875864ee1940b968fdda5a550323f&o= 720w, https://q-xx.bstatic.com/xdata/images/xphoto/1440x434/494555314.jpeg?k=1f633b0c5d2f95a79e2b8a44dca04e401d5875864ee1940b968fdda5a550323f&o= 1440w, https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/494555314.jpeg?k=1f633b0c5d2f95a79e2b8a44dca04e401d5875864ee1940b968fdda5a550323f&o= 2880w" className='object-cover h-full mx-auto relative  lg:w-[90vw] w-full' />
      <div className='h-[50vh] gradient gree  w-full absolute top-0'></div>
      <div className='absolute top-0 z-'>

      </div>
    </div>
  );
};

export default Header;