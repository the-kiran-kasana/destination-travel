import React, { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Goa 🌴",
    hotelPrice: "$50",
    rating: "⭐ 4.3",
    bestFor: "Nightlife",
    attractions: "Beaches, Forts",
    season: "Winter",
  },
  {
    id: 2,
    name: "Bali 🏝️",
    hotelPrice: "$70",
    rating: "⭐ 4.6",
    bestFor: "Culture + Adventure",
    attractions: "Rice Fields, Temples",
    season: "Summer",
  },
  {
    id: 3,
    name: "Maldives 🌊",
    hotelPrice: "$120",
    rating: "⭐ 4.8",
    bestFor: "Honeymoon",
    attractions: "Overwater Villas",
    season: "Year-round",
  },
];

export default function DestinationComparison() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectedDestinations = destinations.filter((d) =>
    selected.includes(d.id)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Compare Destinations</h2>

      {/* Select destinations */}
      <div className="flex gap-4 mb-6">
        {destinations.map((d) => (
          <button key={d.id} onClick={() => toggleSelect(d.id)}className={`px-4 py-2 rounded-lg border ${ selected.includes(d.id) ? "bg-blue-500 text-white" : "bg-gray-200" }`}  >
            {d.name}
          </button>
        ))}
      </div>

      {/* Show Comparison */}
      {selectedDestinations.length >= 2 ? (
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              {selectedDestinations.map((d) => (
                <th key={d.id} className="border p-2">
                  {d.name} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Avg. Hotel Price</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.hotelPrice}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">User Rating</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.rating}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Best For</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.bestFor}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Top Attractions</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.attractions}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Best Season</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.season}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">Select at least 2 destinations to compare.</p>
      )}
    </div>
  );
}
