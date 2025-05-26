import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <Auth/>
      </div>
    </>
  )
}

export default App
