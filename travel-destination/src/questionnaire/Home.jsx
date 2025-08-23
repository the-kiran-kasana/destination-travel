import React, { useState, useEffect } from "react";
import { MapPin, Star, Compass, Users, Plane ,ChevronRight , ChevronLeft,Pencil,Search} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "../auth/firebaseConfig";
import Header from "../components/Header";





export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const navigate = useNavigate();
  const Location = useLocation();




  const images = [
      "https://i.pinimg.com/736x/cf/60/be/cf60bede2844f0680c46647d74d1c71e.jpg",
      "https://i.pinimg.com/1200x/32/e9/1f/32e91f8b74afb5df2e53944ce00e3080.jpg",
      "https://i.pinimg.com/1200x/d0/9b/2f/d09b2f0c15692e9de1ef578b99d7eb5f.jpg",
      "https://i.pinimg.com/736x/fd/bd/98/fdbd98c9ebe623699ade79a2ccefae18.jpg",
      "https://i.pinimg.com/736x/1f/0f/f8/1f0ff89b2d1510b7c61b84a8491ad389.jpg",
      "https://i.pinimg.com/1200x/69/44/61/6944616b2d39e0b746fef97e01382a88.jpg",
    ];

  const scrollImage = [
      "https://i.pinimg.com/736x/e9/4d/ee/e94dee6c68a4493743b71b29181aa1ed.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://i.pinimg.com/1200x/4f/15/cd/4f15cd36e06564745ff82192242d5361.jpg",
      "https://i.pinimg.com/736x/1a/bb/5d/1abb5d41036afac1c1466b513a01ce20.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://i.pinimg.com/736x/06/b9/81/06b981ce5daa3c148db145a5c8a36593.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://i.pinimg.com/736x/4c/9c/b7/4c9cb707293c51a88298b8edf7f1c694.jpg",
    ];


  useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }, [images.length]);



  const handleNext = () => {
    if (scrollIndex < scrollImage.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  }








  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">

      <Header />

      <section className="py-16 px-8 text-center">
        <h2 className="text-5xl text-slate-800 font-bold mb-2">Explore India With Your Favourite Destination</h2>
        <p className="max-w-3xl mx-auto text-gray-600 "> Share itineraries, post reviews, invite friends, and discover trending destinations from a vibrant traveler community. </p>
      </section>


      <div className="w-full max-w-8xl mx-auto relative shadow-xl rounded overflow-hidden mt-5">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-[500px] object-cover transform transition-transform duration-500" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"> Discover Your Perfect Destination </h1>
          <p className="max-w-2xl text-lg text-gray-200 mb-6"> Personalized travel recommendations tailored to your interests, budget, and style. Plan smarter, travel better.</p>
          <button className="bg-white text-black font-semibold rounded-full px-6 py-3 shadow-lg hover:bg-gray-200 transition" onClick={() => navigate("/TravelArea")}> Start Your Journey </button>
        </div>
      </div>


      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-16">
        <h1 className="shadow-lg rounded-2xl">
          <div className="flex flex-col items-center p-6">
            <Compass className="w-12 h-12 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold">Personalized Recommendations</h2>
            <p className="text-center text-gray-600 mt-2">
              Get destination suggestions based on your preferences and past trips.
            </p>
          </div>
        </h1>

        <div className="shadow-lg rounded-2xl">
          <div className="flex flex-col items-center p-6">
            <Star className="w-12 h-12 text-yellow-500 mb-4" />
            <h2 className="text-xl font-semibold">Reviews & Ratings</h2>
            <p className="text-center text-gray-600 mt-2">
              Read traveler reviews and ratings to make informed decisions.
            </p>
          </div>
        </div>

        <div className="shadow-lg rounded-2xl">
          <div className="flex flex-col items-center p-6">
            <MapPin className="w-12 h-12 text-red-500 mb-4" />
            <h2 className="text-xl font-semibold">Interactive Maps</h2>
            <p className="text-center text-gray-600 mt-2">
              Explore recommended destinations on a dynamic map with key attractions.
            </p>
          </div>
        </div>

      </section>


<h2 className="text-3xl font-bold text-left mb-10">Iconic places you need to see</h2>
<div className="w-full max-w-10xl mx-auto overflow-hidden relative shadow-xl rounded-xl">
      <div  className="flex transition-transform duration-700" style={{ transform: `translateX(-${scrollIndex * 25}%)` }} >
        {scrollImage.map((src, idx) => (
          <div key={idx} className="w-1/4 flex-shrink-0 p-5 rounded-5xl">
            <img src={src} alt={`Slide ${idx}`} className="w-full h-120 object-cover rounded-lg rounded-20xl shadow-md hover:scale-110" />
          </div>
        ))}
      </div>

      <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-600 text-white rounded-full p-3" > <ChevronLeft /></button>
      <button onClick={handleNext}  className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-600 text-white rounded-full p-3"> <ChevronRight /></button>

    </div>


      <section className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Plan & Compare</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="shadow-lg rounded-2xl">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 items-center">Personalized Itineraries 🗓️</h3>
              <p className="text-gray-600 mb-4"> Create, save, and share itineraries with friends or family for collaborative planning. </p>
              <button className="text-black">Create Itinerary</button>
            </div>
          </div>

          <div className="shadow-lg rounded-2xl">
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">Trending Destinations️</h3>
                        <p className="text-gray-600 mb-4"> Create, save, and share itineraries with friends or family for collaborative planning. </p>
                        <button className=" text-black">Find Trending Destinations️</button>
                      </div>
                    </div>
        </div>
      </section>

      <h2 className="text-3xl font-bold text-left mb-10">Handpicked Collections for You</h2>
      <div className="grid grid-cols-6 gap-6">

          <div className="relative shadow-xl rounded-2xl overflow-hidden group group-hover:scale-120">
              <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://i.pinimg.com/736x/82/91/5f/82915fddb9cfb9095c9ce9716ebc9802.jpg" alt="Shimla's Best Kept Secret" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide">Explore the vibe of  Utarakhand </h1>
          </div>

          <div className="relative shadow-xl rounded-2xl overflow-hidden group group-hover:scale-120">
            <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Dapoli_tv_destination_img_6_l_667_1000.jpg" alt="Shimla's Best Kept Secret" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide"> Shimla's Best Kept Secret </h1>
          </div>


          <div className="relative shadow-xl rounded-2xl overflow-hidden group group-hover:scale-120">
             <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_ArakuValley_tv_destination_img_7_l_667_1000.jpg" alt="Shimla's Best Kept Secret" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
             <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide"> Hill's retreat in AndhraPradesh </h1>
          </div>


          <div className="relative shadow-xl rounded-2xl overflow-hidden group group-hover:scale-120">
              <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://i.pinimg.com/736x/78/27/30/7827308f0c66f4f2e609c9ecbee40fbd.jpg" alt="A beautiful evening in a mountain town in india" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide">  beautiful mountain town in india </h1>
          </div>

          <div className="relative shadow-xl rounded-2xl overflow-hidden group">
               <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="stunning sunset view of the Taj Mahal" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
               <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide"> stunning sunset view of the Taj Mahal </h1>
          </div>

          <div className="relative shadow-xl rounded-2xl overflow-hidden group">
               <img className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-120" src="https://i.pinimg.com/736x/50/cf/7a/50cf7aeded5c3b8ce4988e26830ed50b.jpg" alt="Yulla Kanda, Kinnaur" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
               <h1 className="absolute bottom-0 w-full text-1xl font-bold text-white text-center py-6 tracking-wide"> Yulla Kanda, Kinnaur </h1>
          </div>

      </div>


      <section className="py-16 px-8 text-center">
        <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Join Our Travel Community</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6"> Share itineraries, post reviews, invite friends, and discover trending destinations from a vibrant traveler community. </p>
        <button className="bg-green-600 text-white rounded-full px-6 py-3 " onClick={() => navigate("/Login")}> Sign Up Now</button>
      </section>

     <footer className="bg-sky-950 text-white py-6 text-center w-full  bottom-0 left-0 w-full z-50"> <p>© 2025 TravelMate. All rights reserved.</p></footer>

    </div>

  );


}



{/*       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"> */}
{/*         {Array.from({ length: scrollImage.length - 3 }).map((_, idx) => ( */}
{/*           <div key={idx} className={`w-3 h-3 rounded-full ${ idx === scrollIndex ? "bg-white" : "bg-gray-400"  }`} /> */}
{/*         ))} */}
{/*       </div> */}