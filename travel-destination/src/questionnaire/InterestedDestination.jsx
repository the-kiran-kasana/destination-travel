    import React , {useState , useEffect}from "react";
    import { useSharedState } from "./StateContext";
    import { Mountain ,Pencil,MapPin,UserRound} from "lucide-react";
    import { useNavigate } from "react-router-dom";
    import { useLocation } from "react-router-dom";
    import { Link } from "react-router-dom";
    import { InterestsData } from "../database/InterestsData";
    import Header from "../components/Header";
    import { auth } from "../auth/firebaseConfig";

    export default function InterestedDestination()
    {

      const { selectedInterests, setSelectedInterests } = useSharedState();
      const { selectedActivities, setSelectedActivities } = useSharedState();
      const { selectedTravelStyles, setSelectedTravelStyles } = useSharedState();
      const [desireDestination , setDesireDestination] = useState([]);
      const [compareDestination , setCompareDestination] = useState([]);
      const navigate = useNavigate();
      const Location = useLocation();



        useEffect(() => {
          const selectedAll = [
            ...selectedInterests,
            ...selectedActivities,
            ...selectedTravelStyles
          ];
            setDesireDestination(InterestsData.filter(d =>
            selectedAll.some(sel => d.title.includes(sel))
          ));
        }, [selectedInterests, selectedActivities, selectedTravelStyles]);


       const toggle = (id) => {
         setCompareDestination((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev,id] );
       }


       const handleCompaire = () => {
         if(auth.currentUser){
               navigate("/DestinationComparison" , { state: { compareDestination } })
         }
         else{
              navigate("/Login");
         }
     }

     const UserProfile = () =>{
           navigate("/UserProfile");
     }





    return (

      <div>
         <Header />


          <section className="py-16 px-8 text-center mt-5 mr-10">
                  <button className={`text-white font-semibold justify-center items-center rounded-full px-6 py-3 shadow-lg hover:bg-gray-900 bg-gradient-to-r from-blue-800 via-rose to-slate-600 transition flex`} onClick={UserProfile} ><UserRound className="flex" />Profiles</button>
          </section>


          <section className="py-16 px-8 text-center mt-5">
                <h2 className="text-5xl text-slate-800 font-bold mb-2">Explore India With Your Favourite Destination</h2>
                <p className="max-w-3xl mx-auto text-gray-600 "> Share itineraries, post reviews, invite friends, and discover trending destinations from a vibrant traveler community. </p>
                <button className={`mt-5 text-white font-semibold justify-center items-center rounded-full px-6 py-3 shadow-lg hover:bg-gray-200 bg-gradient-to-r from-blue-800 via-rose to-slate-600 transition ${  compareDestination.length === 0 ? "cursor-not-allowed opacity-50" : ""}`} disabled={compareDestination.length === 0}   onClick={handleCompaire} >Destination Comparison</button>
          </section>

      <div className="grid grid-cols-3 gap-6 mb-20 mt-8">
        {desireDestination.length > 0 ? (
          desireDestination.map((place, i) => (
            <div key={i} className="relative shadow-xl rounded-2xl  hover:scale-110 overflow-hidden bg-white p-4" >
              <img src={place.image} alt={place.title} className="w-full h-100 rounded-lg object-cover" />
              <h1 className="text-lg font-bold text-gray-800 mt-3"> {place.title} </h1>
              <p className="text-sm text-gray-600">{place.subtitle}</p>
              <p className="text-sm text-gray-500 mt-1">{place.description}</p>
              <h2 className="text-sm font-medium text-gray-700 mt-2"> {place.city}, {place.state}</h2>
              <input type="checkbox" onChange={() => toggle(place.id)} className={`appearance-none absolute bottom-4 right-4 h-5 w-5 border border-gray-500 rounded-full checked:bg-gray-400 cursor-pointer`}/>

              <Link to={`/users/${place.id}`} className="flex text-blue-600 justify-center items-center font-semibold hover:underline block mt-2" ><MapPin/>View Destination</Link>
            </div>
          ))
        ) : (
         <div className="flex items-center ml-130 justify-center w-full min-h-[250px] bg-gray-100 p-8">
           <div className="w-4/5 bg-white rounded-xl shadow-md p-12 text-center border border-gray-300">
             <h2 className="text-2xl font-bold text-gray-800 mb-4">
               No Recommendations Found
             </h2>
             <p className="text-gray-600 text-base">
               Try adjusting your filters or preferences to see more travel options. go on <Link className="text-blue-700" to="/Interests">Destination</Link> and find your favorite travel destination
             </p>
           </div>
         </div>




        )}
      </div>
      <footer className="bg-sky-950 text-white py-6 text-center w-full fixed bottom-0 left-0 z-50"> <p>© 2025 TravelMate. All rights reserved.</p> </footer>
 </div>
    );




}
