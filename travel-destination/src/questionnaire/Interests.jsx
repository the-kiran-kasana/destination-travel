import React, { useState ,useRef ,useContext,createContext} from "react";
import { Check, Mountain, Umbrella, Landmark, PartyPopper, UtensilsCrossed, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSharedState } from "./StateContext";
import Header from "../components/Header";



export default function Interests()
{

   const options = [
        { id: "Adventure", title: "Adventure", image:  "https://i.pinimg.com/1200x/d4/f3/d6/d4f3d6a6573761b8553414fe4d6f38a8.jpg",subtitle: "Hiking, rafting, thrill rides",icon: Mountain },
        { id: "Relaxation", title: "Relaxation", image: "https://i.pinimg.com/736x/bb/91/fd/bb91fdd139fdb20e73a70f8f7d2002d1.jpg" ,subtitle: "Beaches, spa, slow mornings",icon: Umbrella},
        { id: "Culture", title: "Culture", image: "https://i.pinimg.com/736x/fd/aa/75/fdaa75f0854b00753f0bd8a722676836.jpg",subtitle: "Museums, festivals",icon: Landmark, },
   ];

   const navigate = useNavigate();
   const inputRef = useRef();
   const {selectedInterests , setSelectedInterests} = useSharedState();



   const handleContinue = () => {
        alert(`Selected interests: ${selectedInterests.join(", ") || "(none)"}`);
        navigate("/Activities");
   };

  const toggle = (id) => {

      setSelectedInterests((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id] );
      console.log(selectedInterests);
  };

return (
  <>
    <Header />
<div className="border rounded-lg w-[500px] p-4 mt-30 shadow-md mx-auto">

  <h3 className="text-xl font-bold tracking-tight text-gray-800 text-center"> Destination2Travel </h3>
  <p className="mt-4 text-sm text-gray-600 text-center"> We'll personalize Destination2Travel based on your goals </p>
  <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 text-center"> Choose your travel interests</h2>

  <div className="grid grid-cols-2 gap-4 mt-8">
    {options.map((opt) => (
      <div key={opt.id} className={`rounded-xl border p-3 shadow hover:shadow-md transition ${  selectedInterests.includes(opt.id) ? "border-indigo-500" : "border-gray-200"  }`}  >

        <div className="h-[200px] w-[200px] mx-auto">
          <img  src={opt.image} alt={opt.title}  className="h-full w-full rounded-lg object-cover" />
        </div>

        <div className="mt-2 ">
          <opt.icon className="h-5 w-5 mx-auto mb-1" />
          <p className="text-sm font-semibold">{opt.title}</p>
        </div>

        <div className="flex  gap-5 mt-2">
          <p className="mt-1 line-clamp-2 text-xs text-gray-600">{opt.subtitle}</p>
          <input type="checkbox" checked={selectedInterests.includes(opt.id)} onChange={() => toggle(opt.id)} className="h-4 w-4  checked:bg-gray-400 border  rounded cursor-pointer" />
        </div>
      </div>
    ))}
  </div>

  <div className="mt-6 flex justify-center">
    <button onClick={handleContinue} className="rounded-xl bg-slate-700  px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-500" > Next </button>
  </div>
</div>


  </>
);

}