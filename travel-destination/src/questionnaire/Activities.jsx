import React, { useState ,useRef , useContext} from "react";
import { Binoculars, HandPlatter, TentTree ,Tent,HousePlus} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSharedState } from "./StateContext";


export default function Activities()
{


   const navigate = useNavigate();
   const inputRef = useRef();
   const Location = useLocation();
   const {selectedActivities, setSelectedActivities} = useSharedState();


   const options = [
        { id: "sightseeing",  title: "Sightseeing", image:  "https://i.pinimg.com/736x/75/d8/39/75d8398a1233c844354c2911a3b6bf79.jpg",subtitle: "Explore famous landmarks",icon: Binoculars , },
        { id: "dining", title: "Dining", image:  "https://i.pinimg.com/1200x/0b/68/f2/0b68f23e83104e3057b8d79bc6ba7d7c.jpg",subtitle: " Discover food taste experiences",icon: HandPlatter },
        { id: "outdoor", title: "Outdoor", image: "https://i.pinimg.com/736x/03/e8/4c/03e84cd919058020dc3f12bfcea198c9.jpg" ,subtitle: "Enjoy nature with camping",icon: TentTree},
   ];





   const handleContinue = () => {
        alert(`Selected interests: ${selectedActivities.join(", ") || "(none)"}`);
         navigate("/TravelStyle");
   };

  const toggle = (id) => {

      setSelectedActivities((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id] );

      console.log(selectedActivities)
  };

return (
  <>
    <div className="flex flex-col items-center justify-center p-6 border rounded-2xl shadow-md w-full">

      <h3 className="text-xl font-bold tracking-tight text-white-600 text-center"> Destination2Travel </h3>
      <p className="mt-10 text-sm text-white-600 text-center gap-6">  We'll personalize Destination2Travel based on your goals </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white-600 text-center gap-0">Find  Your  Desired  Activities </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
        {options.map((opt) => (
          <button key={opt.id} className={`rounded-xl border p-3 shadow hover:shadow-md transition ${selectedActivities.includes(opt.id) ? "border-indigo-500" : "border-gray-200"}`}>
             <img src={opt.image} alt={opt.title} className="h-42 w-full rounded-lg object-cover"/>


            <div className="relative inset-x-0 bottom-0 p-4 text-left">
                  <div className="flex items-center gap-2 text-white drop-shadow">
                    <opt.icon className="h-5 w-5" />
                    <p className="text-lg font-semibold">{opt.title}</p>
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-white/90">{opt.subtitle}</p>
                 <input ref={inputRef} type="checkbox"onChange={() => toggle(opt.id)} className="appearance-none absolute bottom-4 right-4 h-5 w-5 border border-gray-300 rounded-full checked:bg-gray-400 cursor-pointer"/>
            </div>


          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center w-full"> <button onClick={handleContinue} className="rounded-xl bg-indigo-600 px-10 py-5.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-5" > Next </button></div>
    </div>
  </>
);

}