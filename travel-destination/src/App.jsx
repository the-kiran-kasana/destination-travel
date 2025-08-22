import './App.css'
import Interests from "./questionnaire/Interests"
import Activities from "./questionnaire/Activities"
import TravelStyle from "./questionnaire/TravelStyle"
import DestinationCard from "./questionnaire/DestinationCard"
import Review from "./questionnaire/Review"
import Home from "./questionnaire/Home"
import InterestedDestination from "./questionnaire/InterestedDestination"
import { Route, Routes } from "react-router-dom"
import { StateProvider } from "./questionnaire/StateContext"

function App() {
  return (
    <StateProvider>
      <Routes>
        <Route path="/" element={<Interests />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/TravelStyle" element={<TravelStyle />} />
        <Route path="/InterestedDestination" element={<InterestedDestination />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Review" element={<Review />} />
       <Route path="/users/:id" element={<DestinationCard />} />

      </Routes>
    </StateProvider>
  );
}

export default App;
