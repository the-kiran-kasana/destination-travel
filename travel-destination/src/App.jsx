import { useState } from 'react'
import './App.css'
import Home from "./questionnaire/Home"
import Interests from "./questionnaire/Interests"
import Activities from "./questionnaire/Activities"
// import InterestCard from "./questionnaire/InterestCard"
import {Route , Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Interests/>} />
      <Route path="/Activities" element={<Activities/>} />
    </Routes>
  );
}

export default App
