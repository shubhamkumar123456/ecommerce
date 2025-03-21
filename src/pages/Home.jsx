import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext';

const Home = () => {

    let ctx = useContext(CartContext);
    console.log(ctx);

    const [Allproducts, setAllproducts] = useState([]);
    const getData=async()=>{
        let res = await fetch('https://www.dummyjson.com/products?limit=0');
            let data = await res.json();
            console.log(data.products)
            setAllproducts(data.products)
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className='p-6 bg-amber-950 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
    {
        Allproducts.map((ele,i)=>{
            return <div className='flex bg-white gap-2 rounded-md p-3 flex-col justify-between items-center'>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
                <button onClick={()=>ctx.AddtoCart(ele)} className='bg-green-500 px-3 py-2 rounded-md text-white'>Add to Cart</button>
            </div>
        })
    }
    </div>
  )
}

export default Home
