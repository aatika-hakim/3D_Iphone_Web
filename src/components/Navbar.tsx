import { navlist } from '@/utils/constants';
import Image from 'next/image';
import React from 'react';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';

function Navbar() {
  return (
    <header className='bg-black text-white w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>

        {/* Logo */}
        <Image src='' alt='logo' width={14} height={18} />

        {/* Navigation Links */}
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navlist.map((nav)=> (
            <div key={nav} className='px-5 text-sm cursor-pointer text-white hover:text-purple-400 transition-all'>
              {nav}
            </div>
          ))}
        </div>

        {/* Search */}
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <BiSearch  width={18} height={18}/>
          <BiShoppingBag  width={18} height={18}/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
