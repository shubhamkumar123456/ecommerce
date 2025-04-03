import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';

const Navbar = (props) => {

  let userStore = useContext(UserContext);
  console.log(userStore)

  let login = userStore.user.login

    const [showSidebar, setshowSidebar] = useState(false);
    let ctx = useContext(CartContext)


    const handleLogout = ()=>{
      userStore.setuser({email:'', login:false})
      localStorage.removeItem('Login')
      setshowSidebar(false)
    }


    const handleInputChanger = (e)=>{
        let value = e.target.value; //tag
        // console.log(value)
        userStore.setsearchValue(value)
    }

  return (
   <div className='sticky top-0 w-full z-50 left-0 right-0  bg-black h-[65px]  items-center flex'>
     <div className='relative w-full flex justify-between items-center px-16 text-white'>
        
        <h3 className='font-semibold text-2xl'><Link className='' to={'/'}>Ecom-Shop</Link></h3>

        <form action="">
          <input onChange={handleInputChanger} type="text" className='border border-gray-200 px-3 py-2 rounded' placeholder='search items...' />
        </form>

        <ul className='hidden gap-8  items-center md:flex'>
         { login===true &&  <li className='text-md  li'><Link to={'/'}>Home</Link></li>}
           {login===true &&   <li  className='text-md  li'><Link>About</Link></li>}
           {login===true &&   <li className='text-md '><Link to={'/cart'} className='flex items-center gap-1'><BsCart3 size={25}/> <sup>{ctx.cartArr.length}</sup></Link></li>}
          { login===false && <li  className='text-sm hover:bg-blue-500 bg-blue-600 rounded-md px-4 py-2'><Link>Login</Link></li>}
      { login===false && <li  className='text-sm hover:bg-amber-500 bg-amber-600 rounded-md px-4 py-2'><Link>Signup</Link></li>}
     {login===true && <li onClick={handleLogout} className='bg-blue-500 text-white px-3 py-2 rounded-md'>Logout</li>}
        </ul>

   { showSidebar &&    <ul className='flex flex-col px-16 py-4 sidebar1 top-0 gap-8 bg-black h-screen fixed items-center md:hidden'>
        <h3 className='font-semibold text-2xl'>Ecom-Shop</h3>
            <li onClick={()=>setshowSidebar(false)}  className='text-lg border-b'><Link to={'/'}>Home</Link></li>
            <li onClick={()=>setshowSidebar(false)}  className='text-lg border-b'><Link>About</Link></li>
            <li onClick={()=>setshowSidebar(false)}  className='text-lg '><Link to={'/cart'} className='flex items-center gap-1'><BsCart3 size={25}/> <sup>{ctx.cartArr.length}</sup></Link></li>
          {login===false  && <li onClick={()=>setshowSidebar(false)}  className='text-sm hover:bg-blue-500 bg-blue-600 rounded-md px-4 py-2'><Link>Login</Link></li>}
           {login===false && <li onClick={()=>setshowSidebar(false)}  className='text-sm hover:bg-amber-500 bg-amber-600 rounded-md px-4 py-2'><Link>Signup</Link></li>}
           {login===true && <li onClick={handleLogout} className='bg-blue-500 text-white px-3 py-2 rounded-md'>Logout</li>}
        </ul>}

        <div onClick={()=>setshowSidebar(!showSidebar)} className='md:hidden block'>
        <RiMenu3Fill size={26}/>
        </div>

    </div>
   </div>
  )
}

export default Navbar
