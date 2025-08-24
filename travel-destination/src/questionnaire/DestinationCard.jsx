import { useParams } from "react-router-dom";
import { InterestsData } from "../database/InterestsData";
import Header from "../components/Header";
import DestinationMap from "../components/DestinationMap"

export default function DestinationCard() {
  const { id } = useParams(); // 👈 get id from URL

  const place = InterestsData.find((p) => p.id === id);
  if (!place) return <p>Destination not found</p>;

  return (

    <>
      <Header />


      <section className="relative w-full flex flex-col items-center mt-30 justify-center bg-gradient-to-r from-blue-100 via-white to-blue-100 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center max-w-5xl mb-10 px-4 leading-tight"> Discover the Wonders of {place.city}</h1>
        <img src={place.image} alt={place.title} className="w-full max-w-7xl h-[400px] md:h-[500px]  object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
      </section>

      {/* Destination Details */}
      <section className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-16 p-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{place.city}</h2>
        <h3 className="text-xl font-semibold text-gray-600 mb-5">{place.subtitle}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{place.description || "No description available."}</p>

        <div className=" flex-wrap gap-6 items-center">
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 justify-center items-center rounded-full font-semibold"> Rating: {place.rating}⭐ </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2  justify-center items-center rounded-full font-semibold"> Reviews: {place.review} </span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8"> Explore {place.city} on the Map </h1>
        <div className="rounded-3xl overflow-hidden shadow-2xl"> <DestinationMap place={place} /> </div>
      </section>


      <footer className="bg-slate-700 border-t border-slate-200 text-gray-200 py-6 text-center mt-20"> <p>© 2025 TravelMate. All rights reserved.</p> </footer>
    </>


  );
}
