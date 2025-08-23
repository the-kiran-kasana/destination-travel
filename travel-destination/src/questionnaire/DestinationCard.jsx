import { useParams } from "react-router-dom";
import { InterestsData } from "../database/InterestsData";
import Header from "../components/Header";

export default function DestinationCard() {
  const { id } = useParams(); // 👈 get id from URL

  const place = InterestsData.find((p) => p.id === id);
  if (!place) return <p>Destination not found</p>;

  return (
  <>
  <Header />
    <div className="border p-4 rounded shadow-md m-2 mt-30 flex-col items-center justify-center">

      <img src={place.image} alt={place.title} className="h-100 w-full rounded-lg object-cover"/>
      <h2 className="text-lg font-bold">{place.city}</h2>
      <h2 className="text-lg font-bold">{place.subtitle}</h2>
      <h2 className="text-lg font-bold">{place.description}</h2>
      <p className="text-sm text-gray-600"> {place.description || "No description"}</p>
      <div className="flex gap-4 mt-2">
        <p>Rating: {place.rating}</p>
        <p>{place.review}</p>
      </div>
    </div>
    </>
  );
}
