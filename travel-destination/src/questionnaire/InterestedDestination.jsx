import React from "react";
import { useSharedState } from "./StateContext";
import { Mountain } from "lucide-react";
import { InterestsData } from "../database/InterestsData";

export default function InterestedDestination()
{

  const { selectedInterests, setSelectedInterests } = useSharedState();
  const { selectedActivities, setSelectedActivities } = useSharedState();
  const { selectedTravelStyles, setSelectedTravelStyles } = useSharedState();
  const [desireDestination , setDesireDestination] = useState();




  const recommended = InterestsData.filter(d => (d.title === "Relaxation") || (d.title === "Luxury") || (d.title === "Family") || (d.title === "Solo") || (d.title === "Outdoor") ||(d.title === "Dining") || (d.title === "Sightseeing") ||(d.title === "Culture") ||(d.title === "Adventure")

  );

  console.log(selectedInterests, selectedActivities, selectedTravelStyles);


  return (
    <>
       {InterestsData.map((opt) => (
              <button key={opt.id} onClick={() => toggle(opt.id)}>
                <img src={opt.image} alt={opt.title} className="h-100 w-full rounded-lg object-cover"/>
                <opt.icon /> {opt.title} {selectedInterests.includes(opt.id) && "✅"}
                 <p className="mt-1 line-clamp-2 text-sm text-white/90">{opt.subtitle}</p>
              </button>
            ))}
    </>
  );
}
