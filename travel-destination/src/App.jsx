import './App.css'
import Interests from "./questionnaire/Interests"
import Activities from "./questionnaire/Activities"
import TravelStyle from "./questionnaire/TravelStyle"
import { Route, Routes } from "react-router-dom"
import { StateProvider } from "./questionnaire/StateContext"

function App() {
  return (
    <StateProvider>
      <Routes>
        <Route path="/" element={<Interests />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/TravelStyle" element={<TravelStyle />} />
      </Routes>
    </StateProvider>
  );
}

export default App;
