    import React , {useState , useEffect}from "react";
    import { useSharedState } from "./StateContext";
    import { Mountain ,Pencil} from "lucide-react";
    import { useNavigate } from "react-router-dom";
    import { useLocation } from "react-router-dom";
    import { Link } from "react-router-dom";
    import { InterestsData } from "../database/InterestsData";

    export default function InterestedDestination()
    {

      const { selectedInterests, setSelectedInterests } = useSharedState();
      const { selectedActivities, setSelectedActivities } = useSharedState();
      const { selectedTravelStyles, setSelectedTravelStyles } = useSharedState();
      const [desireDestination , setDesireDestination] = useState([]);
      const navigate = useNavigate();
       const Location = useLocation();



        useEffect(() => {
          const selectedAll = [
            ...selectedInterests,
            ...selectedActivities,
            ...selectedTravelStyles
          ];

            setDesireDestination(InterestsData.filter(d =>
            selectedAll.some(sel => d.title.includes(sel))
          ));

          console.log("after the filtering :" + desireDestination)


        }, [selectedInterests, selectedActivities, selectedTravelStyles]);




    return (
      <div>
        <h2>Recommended Destinations</h2>
        <button
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => navigate("/Review")}
        >
          <Pencil size={18} /> Reviews
        </button>

        {desireDestination.length > 0 ? (
          desireDestination.map((place, i) => (
            <div key={i} className="card">

              <h3>{place.title}</h3>
              <p>{place.subtitle}</p>
              <p>{place.id}</p>
              <img
                src={place.image}
                alt={place.title}
                className="h-100 w-full rounded-lg object-cover"
              />
              <p>{place.description}</p>
              <h1>
                {place.city}, {place.state}
              </h1>
              <Link to={`/users/${place.id}`}>View Destination</Link>
            </div>
          ))
        ) : (
          <p>No recommendations yet</p>
        )}
      </div>
    );




}
