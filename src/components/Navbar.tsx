import Image from 'next/image';
import React from 'react';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';

function Navbar() {
  return (
    <header>
      <nav>
        {/* Logo */}
        <Image src='' alt='logo' width={14} height={18} />

        {/* Navigation Links */}
        <div>
          {['Mobiles', 'Macbooks', 'Tabs'].map((nav, index)=> (
            <div key={nav}>
              {nav}
            </div>
          ))}
        </div>

        {/* Search */}
        <div>
          <BiSearch  width={18} height={18}/>
          <BiShoppingBag  width={18} height={18}/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
