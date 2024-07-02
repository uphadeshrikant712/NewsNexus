import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsBoard from './components/NewsBoard'
import NewsItem from './components/NewsItem'
import Footer from './components/Footer'

const App = () => {
  const [category, setCategory] = useState('general');
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer/>
    </div>
  )
}

export default App