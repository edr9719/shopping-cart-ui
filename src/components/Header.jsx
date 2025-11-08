import { FaShoppingCart } from 'react-icons/fa';
import CartDropdown from './CartDropdown';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className=' bg-gray-700 shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl text-white'>The Techy Shop</h1>
      <div className='relative'>
        <button
          className='cursor-pointer'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaShoppingCart
            className={`mr-3 text-white transition-transform duration-200 ${
              showDropdown ? 'scale-210 text-blue-400' : 'scale-180 text-white'
            }`}
          />

          {itemCount > 0 && (
            <span className='absolute -top-2 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && <CartDropdown />}
      </div>
    </header>
  );
};

export default Header;
