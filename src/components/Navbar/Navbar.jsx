import React, {useState} from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsSearch, BsFillSaveFill } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineClose, AiFillTag, AiFillHeart } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'



const Navbar = () => {
const [nav, setNav] = useState(false)


  return (
    <div className='max-w-[1300px] mx-auto p-4 border border-black flex justify-between items-center'>

      <div className='left flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <RxHamburgerMenu size={30}/>
        </div>
        <h1 className='px-2 logo hidden md:text-4xl lg:text-4xl'>psycho<span className='font-bold text-purple-600'>Junky</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[1rem]'>
            <p className='bg-black text-white p-2 rounded-full'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
      </div>

      <div className='center flex items-center w-[200px] sm:w-[400px] lg:w-[500px] rounded-full bg-gray-200 px-2'>
        <BsSearch size={20}/>
        <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='Search here...'></input>
      </div>

      <button className='right md:flex items-center bg-black rounded-md py-2 px-5 hidden  text-white'>
        <AiOutlineShoppingCart size={23}/><p className='pl-2'>Cart</p>
      </button>

      {/* Mobile Menu */}

      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }

      {/* Side Menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>psycho<span className='font-bold text-purple-500'>Junky</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><AiFillHeart size={25} className='mr-4' /> Favourites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
