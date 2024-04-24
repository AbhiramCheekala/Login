import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../components/login'
import Signup from '../components/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
</Router>


</>
  )
}

export default App
