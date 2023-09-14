import { useState } from 'react'
import Card from './components/Card/Card'
import Category from './components/Category/Category'
import Food from './components/Food/Food'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-5'>
      <Navbar/>
      <Hero/>
      <Card/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App
