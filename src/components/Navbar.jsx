import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Navbar = () => {
    let ctx = useContext(CartContext);
    console.log(ctx)
  return (
    <div className='flex justify-center items-center gap-[30px]'>
        <ul className='flex items-center'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/cart'}>Cart <sup>{ctx.cartArr.length}</sup></Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
