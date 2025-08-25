import { useState } from "react";

function ItineraryPlanner() {
  const [itinerary, setItinerary] = useState([]);
  const [day, setDay] = useState("");
  const [activity, setActivity] = useState("");

  const addActivity = () => {
    if (day && activity) {
      setItinerary([...itinerary, { day, activity }]);
      setDay("");
      setActivity("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-4">✈️ Personalized Itinerary</h2>

      <div className="flex gap-2 mb-4">
        <input type="text"  placeholder="Day (e.g. Day 1)" value={day}  onChange={(e) => setDay(e.target.value)}  className="border p-2 rounded w-1/4" />
        <input type="text" placeholder="Activity (e.g. Visit Taj Mahal)" value={activity} onChange={(e) => setActivity(e.target.value)} className="border p-2 rounded flex-1" />
        <button onClick={addActivity} className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">  Add </button> </div>

      <div className="bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Your Plan</h3>
        {itinerary.length === 0 ? (
          <p className="text-gray-500">No activities yet. Add some!</p>
        ) : (
          <ul className="space-y-2">
            {itinerary.map((item, index) => (
              <li  key={index} className="bg-gray-200 p-2 rounded shadow flex justify-between">
                <span> <strong> {item.day} </strong>: {item.activity} </span>
                <button  onClick={() =>  setItinerary(itinerary.filter((_, i) => i !== index))} className="text-red-500 hover:underline"> Remove </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">  Save </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"> Share </button>
      </div>
    </div>
  );
}

export default ItineraryPlanner;



