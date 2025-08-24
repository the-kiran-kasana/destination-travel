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

 const destination = () => {
            if(auth.currentUser){
              navigate("/Interests")
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



                  <div className="flex items-center gap-4">
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={() => navigate("/")}> Home </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={handleClick}> Reviews </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={destination} > Destination </button>
                     <button className="px-4 py-2 font-semibold text-white rounded-lg hover:bg-gray-700"  onClick={() => navigate("/Login")} > Login / Signup</button>
                  </div>
                </nav>
              </header>
        </>
    );

}