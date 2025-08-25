import React ,{useState}from "react";
import Header from "../components/Header";
import {Heart } from "lucide-react";

const destinations = [


  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    image: "https://i.pinimg.com/736x/10/ef/53/10ef53eb359ad7cd4922da579490684a.jpg",
  },
  {
    id: 2,
    name: "Hawa Mahal",
    state: "Rajasthan",
    image: "https://i.pinimg.com/1200x/aa/5d/92/aa5d9273ec5f92954c510d75f4f1b19f.jpg",
  },
  {
    id: 3,
    name: "Gateway of India",
    state: "Maharashtra",
    image: "https://i.pinimg.com/736x/e7/e9/c7/e7e9c761f3dc6633ec421d488de5aa43.jpg",
  },
  {
    id: 4,
    name: "Golden Temple",
    state: "Punjab",
    image: "https://i.pinimg.com/736x/6e/2d/cd/6e2dcd007102c034c9375d05cf2e2b2e.jpg",
  },
  {
    id: 5,
    name: "Backwaters of Kerala",
    state: "Kerala",
    image: "https://i.pinimg.com/736x/14/eb/fc/14ebfc7a8513757e9665a02b399baceb.jpg",
  },
  {
    id: 6,
    name: "Konark Sun Temple",
    state: "Odisha",
    image: "https://i.pinimg.com/1200x/b0/1c/11/b01c1174f9c582dca804309b6bf3c3a2.jpg",
  },
  {
    id: 8,
    name: "Mysore Palace",
    state: "Karnataka",
    image: "https://i.pinimg.com/736x/df/6b/b0/df6bb0867220d1f6ba22c23f2995da06.jpg",
  },
  {
      id: 9,
      name: "Shillong",
      state: "Meghalaya",
      image: "https://i.pinimg.com/736x/db/a7/29/dba72946c7feba559604c6faea7e0a9e.jpg"
    },
     {
         id: 10,
         name: "Puri Jagannath Temple",
         state: "Odisha",
         image: "https://i.pinimg.com/736x/22/97/1b/22971bc1d1a88e07b9861d895ea0ca8a.jpg"
       },

       {
         id: 12,
         name: "Darjeeling",
         state: "West Bengal",
         image: "https://i.pinimg.com/736x/17/7a/60/177a6059560bfa8e46d91acc6b748997.jpg"
       },
       {
         id: 13,
         name: "Kolkata Victoria Memorial",
         state: "West Bengal",
         image: "https://i.pinimg.com/1200x/a7/c3/9d/a7c39de0686bc65f1ab69b4861e587e5.jpg"
       },
       {
         id: 14,
         name: "Bodh Gaya",
         state: "Bihar",
         image: "https://i.pinimg.com/736x/ed/02/60/ed02605102a3f434103793997256641f.jpg"
       },

       {
         id: 19,
         name: "Lotus Temple",
         state: "Delhi",
         image: "https://i.pinimg.com/736x/8e/78/b2/8e78b26ae1c23f4be6ba50b52b40984b.jpg"
       },
       {
         id: 20,
         name: "Qutub Minar",
         state: "Delhi",
         image: "https://i.pinimg.com/1200x/3f/66/4e/3f664e14a1ea71ea555d69ef0989033d.jpg"
       },
       {
         id: 21,
         name: "Mysore Palace",
         state: "Karnataka",
         image: "https://i.pinimg.com/736x/36/d1/7b/36d17b7470e2ebdd367a930a753ee1b3.jpg"
       },
       {
         id: 22,
         name: "Hampi",
         state: "Karnataka",
         image: "https://i.pinimg.com/736x/0f/48/43/0f48434ca2c9c608972730d5551e77d8.jpg"
       },
       {
         id: 23,
         name: "Charminar",
         state: "Telangana",
         image: "https://i.pinimg.com/736x/b8/d0/6d/b8d06d9cea5a9831857e093f3403de37.jpg"
       },

       {
         id: 25,
         name: "Kanyakumari",
         state: "Tamil Nadu",
         image: "https://i.pinimg.com/736x/53/ff/d4/53ffd4556be72cf9f93568391d68c76c.jpg"
       },
       {
         id: 26,
         name: "Andaman & Nicobar Islands",
         state: "Andaman & Nicobar",
         image: "https://i.pinimg.com/736x/21/83/5d/21835dacd036697f10db78e2d6e75265.jpg"
       },
       {
         id: 27,
         name: "Leh-Ladakh",
         state: "Ladakh",
         image: "https://i.pinimg.com/736x/11/40/98/11409859db78e174c74e1398a98dad05.jpg"
       },
       {
         id: 28,
         name: "Gulmarg",
         state: "Jammu & Kashmir",
         image: "https://i.pinimg.com/736x/78/f7/de/78f7deb80fd6e8ed905fd813de980928.jpg"
       },
       {
         id: 29,
         name: "Vaishno Devi Temple",
         state: "Jammu & Kashmir",
         image: "https://i.pinimg.com/736x/96/47/23/96472363889fffedfff0181bed71ec77.jpg"
       },

       {
         id: 31,
         name: "Somnath Temple",
         state: "Gujarat",
         image: "https://i.pinimg.com/736x/35/d5/0d/35d50de6f82001c5da5fc4d49f4b65ae.jpg"
       },
       {
         id: 32,
         name: "Statue of Unity",
         state: "Gujarat",
         image: "https://i.pinimg.com/736x/83/97/fb/8397fbdf6252c99f61329b882e8f1fb2.jpg"
       },
       {
         id: 33,
         name: "Khajuraho Temples",
         state: "Madhya Pradesh",
         image: "https://i.pinimg.com/736x/1f/59/d0/1f59d004f7ec41613df733cf96159de9.jpg"
       },

       {
         id: 35,
         name: "Chhattisgarh Chitrakote Falls",
         state: "Chhattisgarh",
         image: "https://i.pinimg.com/736x/4a/fe/8b/4afe8b74eed9afa4dd4e154542495373.jpg"
       },


       {
         id: 39,
         name: "Itanagar",
         state: "Arunachal Pradesh",
         image: "https://i.pinimg.com/1200x/b6/9b/df/b69bdfd5fad4e3b9191fc80c0702fba0.jpg"
       },
       {
         id: 40,
         name: "Agartala Ujjayanta Palace",
         state: "Tripura",
         image: "https://i.pinimg.com/1200x/30/48/91/30489192546ed35fe9e720d427809261.jpg"
       },
       {
         id: 42,
         name: "Lakshadweep Islands",
         state: "Lakshadweep",
         image: "https://i.pinimg.com/736x/43/8e/61/438e61c76d669c76d94d9f815523fadc.jpg"
       },
       {
         id: 43,
         name: "Sikkim - Gangtok",
         state: "Sikkim",
         image: "https://i.pinimg.com/1200x/c1/d5/7d/c1d57d49eb13323b91330abb014f2277.jpg"
       }
];

export default function StateTravelDestinations() {

  const [liked , setLiked] = useState(false);

  const favoriteDestination =(e) => {
       e.preventDefault();
        setLiked(!liked);
        console.log("hellofavoriteDestination ")
  }

  return (

 <div className="p-8 bg-gray-50 min-h-screen">

  <Header />
   <h1 className="text-5xl font-bold text-center mb-15 mt-20 text-slate-700">
     Famous Travel Destinations of India
   </h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {destinations.map((place) => (
       <div key={place.id} className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300" >
         <img src={place.image} alt={place.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />

         <button onClick={favoriteDestination} className="absolute top-3 right-3 z-20 bg-white/70 rounded-full p-2 shadow-md hover:bg-white transition" >
             <Heart size={24} className={`${liked ? "text-red-600 fill-red-600" : "text-gray-500"}`}/>
         </button>

         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent
                         group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent
                         transition-all duration-500 flex flex-col justify-end p-4">

           <h2 className="text-white text-xl font-semibold drop-shadow-md"> {place.name} </h2>
           <p className="text-white drop-shadow-md">{place.state}</p>
         </div>
       </div>
     ))}
   </div>
 </div>

  );
}
