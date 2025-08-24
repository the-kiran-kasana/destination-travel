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
import { Route, Routes,Router } from "react-router-dom"
import { StateProvider } from "./questionnaire/StateContext"
import PrivateRoute from "./authentication/PrivateRoute";

function App() {
  return (
    <StateProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Interests" element={<PrivateRoute> <Interests /></PrivateRoute>} />
        <Route path="/Activities" element={<PrivateRoute> <Activities /></PrivateRoute>} />
        <Route path="/UserProfile" element={<PrivateRoute> <UserProfile /></PrivateRoute>} />
        <Route path="/TravelStyle" element={<PrivateRoute> <TravelStyle /></PrivateRoute>} />
        <Route path="/InterestedDestination" element={ <PrivateRoute> <InterestedDestination /></PrivateRoute>} />
        <Route path="/DestinationComparison" element={<PrivateRoute> <DestinationComparison /></PrivateRoute>} />
        <Route path="/Review" element={<PrivateRoute> <Review /></PrivateRoute>} />
{/*         <Route path="/UploadData" element={<PrivateRoute> <UploadData />} /> */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TravelArea" element={<PrivateRoute> <TravelArea /></PrivateRoute>} />
        <Route path="/ItineraryPlanner" element={<PrivateRoute> <ItineraryPlanner /></PrivateRoute>} />
        <Route path="/users/:id" element={<PrivateRoute> <DestinationCard /> </PrivateRoute>} />
        <Route path="/Review" element={<PrivateRoute> <Review /> </PrivateRoute> } />

      </Routes>

   </StateProvider>
  );
}

export default App;


