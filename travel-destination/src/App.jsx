import './App.css'
import Interests from "./questionnaire/Interests"
import Activities from "./questionnaire/Activities"
import TravelStyle from "./questionnaire/TravelStyle"
import DestinationCard from "./questionnaire/DestinationCard"
import ItineraryPlanner from "./components/ItineraryPlanner"
import TravelArea from "./components/TravelArea"
import UploadData from "./database/UploadData"
import UserProfile from "./components/UserProfile"
import DestinationComparison from "./components/DestinationComparison"
import Login from "./authentication/Login"
import Signup from "./authentication/Signup"
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
        <Route path="/Interests" element={<Interests />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/TravelStyle" element={<TravelStyle />} />
        <Route path="/InterestedDestination" element={<InterestedDestination />} />
        <Route path="/DestinationComparison" element={<DestinationComparison />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/UploadData" element={<UploadData />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TravelArea" element={<TravelArea />} />
        <Route path="/ItineraryPlanner" element={<ItineraryPlanner />} />
        <Route path="/users/:id" element={<DestinationCard />} />
      </Routes>


</StateProvider>
  );
}

export default App;
