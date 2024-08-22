import React,{useState,useEffect} from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios";

function Course() {
const [book,setBook]=useState([])
useEffect(()=>{
    const getBook=async()=>{
        try{
const res=await axios.get("http://localhost:4001/book");
console.log(res.data);
setBook(res.data);
        }
        catch(error){
console.log(error)
        }
    }
    getBook();
},[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className='mt-28 items-center justify-center text-center '>
    <h1 className='text-2xl font-semibold md:text-4xl'>
        We are delighted to have you all <span className='text-pink-500'>here !</span>

    </h1>
    <p className='mt-12'>
    With the advent of digital technology, books are now available in physical and electronic formats, making them more accessible. Regardless of their form, books continue to play a crucial role in education, personal growth, and leisure.
    </p>
   <Link to="/">
   <button className=" mt-6 bg-pink-600 text-white px-4 py-2 
    rounded-b-md hover:bg-pink-900 duration-300">Back</button>
   </Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
    {
        book.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))
    }
</div>
    </div>
    </>
  )
}

export default Course
