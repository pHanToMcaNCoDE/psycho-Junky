import React, { useState } from 'react'
import {data} from '../../data/data'

const Food = () => {
const [foods, setFoods] = useState(data);

// Filter Categories

const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category
        })
    )
}

// Filter Prices

// const filterPrice = (price) => {
//     setFoods(
//         data.filter((item) => {
//             return item.price === price
//         })
//     )
// }


  return (
    <div className='max-w-[1300px] m-auto px-4 py-12'>
        <h1 className='text-purple-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

        {/* Filter ROW */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>All</button>
                    <button onClick={() => filterType('breakfast')} className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>Breakfast</button>
                    <button onClick={() => filterType('lunch')} className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>Lunch</button>
                    <button onClick={() => filterType('dinner')} className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>Dinner</button>
                    <button onClick={() => filterType('sweets')} className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>Sweets</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>$</button>
                    <button className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>$$</button>
                    <button className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>$$$</button>
                    <button className='m-1 border border-purple-600 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-5 rounded-xl'>$$$$</button>
                </div>
            </div>
        </div>


        {/* Display Foods */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {
                foods.map((item, index) => (
                    <div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}></img>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                 <span className='bg-purple-500 text-white p-1 rounded-full  '>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Food
