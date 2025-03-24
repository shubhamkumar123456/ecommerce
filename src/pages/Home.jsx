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


    const [currenPage, setcurrenPage] = useState(1);
    const itemPerPage = 10;
    const lastIndex = itemPerPage * currenPage;
    const firstIndex = lastIndex - itemPerPage;
    let noOfBtn = Math.ceil(Allproducts.length / itemPerPage);
    console.log(noOfBtn) //20

    let slicedArr = Allproducts.slice(firstIndex, lastIndex);
    console.log(slicedArr)

    // let btnArr = [];

    // for(let i = 1; i<=noOfBtn; i++){
    //     btnArr.push(i)
    // }

    // console.log(btnArr)



    useEffect(()=>{
        getData()
    },[])
  return (

    <div>
 <div className='p-6 bg-amber-950 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
    {
        slicedArr.map((ele,i)=>{
            return <div className='flex bg-white gap-2 rounded-md p-3 flex-col justify-between items-center'>
                <img src={ele.thumbnail} alt="" />
                <p>{ele.title}</p>
                <button onClick={()=>ctx.AddtoCart(ele)} className='bg-green-500 px-3 py-2 rounded-md text-white'>Add to Cart</button>
            </div>
        })
    }  
    </div>

<div className='flex justify-center'>

{/*  ['', '', '', '', '', '','', '', '',''] */}
<button className='bg-black text-white rounded-md p-1  mx-1'>Prev</button>
{
    Array(noOfBtn).fill('').map((ele,i)=>{
        return <button onClick={()=>setcurrenPage(i+1)} className='bg-blue-500 rounded-md p-1 w-10'>{i+1}</button>
    })
}
<button className='bg-black text-white rounded-md p-1 mx-1 '>Next</button>
</div>
    </div>
   
  )
}

export default Home
