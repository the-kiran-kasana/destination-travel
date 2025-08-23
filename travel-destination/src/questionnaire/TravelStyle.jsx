import React, { useState ,useRef ,useContext} from "react";
import { Binoculars, HandPlatter, TentTree ,Tent,HousePlus} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {useSharedState} from "./StateContext"
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function TravelStyle()
{

   const options = [
           { id: "Solo",  title: "Solo", image:  "https://i.pinimg.com/1200x/37/05/73/3705737db12bde76985204ec6fa83ee1.jpg",subtitle: "Explore famous Solo",icon: Tent , },
           { id: "Family", title: "Family", image:  "https://i.pinimg.com/1200x/b2/f3/45/b2f3459b5be00a47f3a52e9c01a212a6.jpg",subtitle: " Discover family destination",icon: HousePlus },
           { id: "Luxury", title: "Luxury", image: "https://i.pinimg.com/1200x/ec/a7/c4/eca7c4931e71dd9edd89876b36e10397.jpg" ,subtitle: "Enjoy luxury style landmarks",icon: HandPlatter},
   ];

   const navigate = useNavigate();
   const Location = useLocation();
   const [selected, setSelected] = useState([]);
   const [interest , setInterest] = useState([]);
   const inputRef = useRef();
   const {selectedTravelStyles , setSelectedTravelStyles} = useSharedState();



   const handleContinue = () => {
        alert(`Selected interests: ${selectedTravelStyles.join(", ") || "(none)"}`);
        navigate("/InterestedDestination");
   };

  const toggle = (id) => {

      setSelectedTravelStyles((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id] );
//       console.log(selectedTravelStyles)
  };

return (
  <>
    <Header />
    <div className="border rounded-lg w-[500px] p-4 mt-30 shadow-md mx-auto">

      <h3 className="text-xl font-bold tracking-tight text-white-600 text-center"> Destination2Travel </h3>
      <p className="mt-10 text-sm text-white-600 text-center gap-6">  We'll personalize Destination2Travel based on your goals </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white-600 text-center gap-0">Preferred Your Travel Styles </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
        {options.map((opt) => (
          <button key={opt.id} className={`rounded-xl border p-3 shadow hover:shadow-md transition ${selectedTravelStyles.includes(opt.id) ? "border-indigo-500" : "border-gray-200"}`}>
             <img src={opt.image} alt={opt.title} className="h-42 w-full rounded-lg object-cover"/>


            <div className="relative inset-x-0 bottom-0 p-4 text-left">
                  <div className="flex items-center gap-2 text-black-400 drop-shadow">
                    <opt.icon className="h-5 w-5" />
                    <p className="text-lg font-semibold">{opt.title}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-black-400/90">{opt.subtitle}</p>
                 <input ref={inputRef} type="checkbox"onChange={() => toggle(opt.id)} className="appearance-none absolute bottom-4 right-4 h-5 w-5 border border-gray-500 rounded-full checked:bg-gray-400 cursor-pointer"/>
            </div>


          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center w-full"> <button onClick={handleContinue} className="rounded-xl bg-indigo-600 px-10 py-5.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-5" > Next </button></div>
    </div>
  </>
);

}