import { CiSquareMinus } from 'react-icons/ci';
import { CiSquarePlus } from 'react-icons/ci';
import { IoTrashOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const CartDropdown = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className='absolute bg-gray-200 right-1 w-[350px] rounded-md flex flex-col justify-center items-center'>
      {cart.map((product) => (
        <div className='flex justify-left items-center mb-2 mt-2 w-[95%] bg-white rounded-lg h-[85px]'>
          <img src={product.image} className='w-30 h-20 rounded-md' />
          <span>
            {product.name}
            <span>
              <span className='flex flex-col'>{`Price: $${product.price}`}</span>
            </span>
            {product.qty > 1 ? (
              <span className='flex justify-left items-center'>
                <CiSquareMinus
                  className='text-2xl cursor-pointer'
                  onClick={() => removeFromCart(product)}
                />{' '}
                {` ${product.qty}`}
                <CiSquarePlus
                  className='text-2xl cursor-pointer'
                  onClick={() => addToCart(product)}
                />
              </span>
            ) : (
              <span className='flex justify-left items-center'>
                <span className='border rounded-sm mr-1 cursor-pointer'>
                  <IoTrashOutline
                    className='text-lg'
                    onClick={() => removeFromCart(product)}
                  />
                </span>{' '}
                {` x${product.qty}`}
                <CiSquarePlus
                  className='text-2xl cursor-pointer'
                  onClick={() => addToCart(product)}
                />
              </span>
            )}
          </span>
        </div>
      ))}
      {itemCount > 0 && (
        <div className='flex justify-center items-center mb-2 mt-2 w-[95%] bg-white rounded-lg h-[35px] font-bold'>
          {`Total: $${total}`}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
