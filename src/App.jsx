import { useState } from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <Header />
    <Products />
   </div>
  )
}

export default App
