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
//       console.log(selectedInterests);
  };

return (
  <>
    <Header />
    <div className="flex  flex-col items-center  justify-center p-5 border rounded-2xl shadow-md mt-20 ">

      <h3 className="text-xl font-bold tracking-tight text-black-600 text-center"> Destination2Travel </h3>
      <p className="mt-10 text-sm text-black-600 text-center gap-6">  We'll personalize Destination2Travel based on your goals </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-black-600 text-center"> Choose your travel interests </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mt-20">
        {options.map((opt) => (
          <button key={opt.id} className={`rounded-xl border p-3 shadow hover:shadow-md transition ${selectedInterests.includes(opt.id) ? "border-indigo-500" : "border-gray-200"}`}>
             <img src={opt.image} alt={opt.title} className="h-42 w-full rounded-lg object-cover"/>


            <div className="relative inset-x-0 bottom-0 p-4 text-left">
                  <div className="flex items-center gap-2 text-black-600e drop-shadow">
                    <opt.icon className="h-5 w-5" />
                    <p className="text-lg font-semibold">{opt.title}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-black-600/90">{opt.subtitle}</p>
                 <input ref={inputRef} type="checkbox"onChange={() => toggle(opt.id)} className="appearance-none absolute bottom-4 right-4 h-5 w-5 border border-gray-300 rounded-full checked:bg-gray-400 cursor-pointer"/>
            </div>


          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center"> <button onClick={handleContinue} className="rounded-xl bg-slate-700 px-5 py-5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-5" > Next </button></div>
    </div>
  </>
);

}