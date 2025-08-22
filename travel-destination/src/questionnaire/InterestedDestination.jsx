import React , {useState , useEffect}from "react";
import { useSharedState } from "./StateContext";
import { Mountain } from "lucide-react";
import { InterestsData } from "../database/InterestsData";

export default function InterestedDestination()
{

  const { selectedInterests, setSelectedInterests } = useSharedState();
  const { selectedActivities, setSelectedActivities } = useSharedState();
  const { selectedTravelStyles, setSelectedTravelStyles } = useSharedState();
  const [desireDestination , setDesireDestination] = useState([]);


    useEffect(() => {
      const selectedAll = [
        ...selectedInterests,
        ...selectedActivities,
        ...selectedTravelStyles
      ];

      const recommended = InterestsData.filter(d =>
        selectedAll.some(sel => d.title.includes(sel))
      );

      console.log("after the filtering :" + recommended)

      setDesireDestination(recommended);
    }, [selectedInterests, selectedActivities, selectedTravelStyles]);





return (
  <div>
    <h2>Recommended Destinations</h2>
    {desireDestination.length > 0 ? (
      desireDestination.map((place, i) => (
        <div key={i} className="card">
          <h3>{place.title}</h3>
          <p>{place.subtitle}</p>
          <img src={place.image} alt={place.title} className="h-100 w-full rounded-lg object-cover"/>
          <h1>{place.city}</h1>
        </div>
      ))
    ) : (
      <p>No recommendations yet</p>
    )}
  </div>
);
}
