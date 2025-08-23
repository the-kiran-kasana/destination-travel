import React, { useState, useEffect } from "react";
import { MapPin, Star, Compass, Users, Plane ,ChevronRight , ChevronLeft,Pencil,Search} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../auth/firebaseConfig";

export default function Header()
{
     const navigate = useNavigate();
     const Location = useLocation();



    const handleClick = () => {
        if(auth.currentUser){
          navigate("/Review");
        }
        else{
          navigate("/Login");
        }
    }

    return (
        <>
          <header className="bg-slate-900 bg-opacity-50 shadow-md fixed top-0 left-0 w-full z-50">

                <nav className="flex items-center justify-between px-6 h-20">
                  <div className="flex items-center"> <h2 className="text-3xl text-white font-semibold">Destination2Travel</h2> </div>


                  <div className="relative w-150">
                    <input type="text" placeholder="Search" className="bg-slate-700 border border-slate-300 rounded-lg px-10 py-2 w-full text-white placeholder-slate-300" />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
                  </div>

                  <div className="flex items-center gap-4">
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={() => navigate("/Home")}> Home </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={handleClick}> Reviews </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700" onClick={() => navigate("/Trending")} > Trending Destinations </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700" onClick={() => navigate("/Login")} > Login / Signup</button>
                  </div>
                </nav>
              </header>
        </>
    );

}