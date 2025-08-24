import React from "react";
import { useLocation } from "react-router-dom";
import { InterestsData } from "../database/InterestsData";
import Header from "../components/Header";

export default function DestinationComparison() {
  const location = useLocation();
  const { compareDestination = [] } = location.state || {};

  const selectedDestinations = InterestsData.filter((d) =>
        compareDestination.includes(d.id)
  );

  return (
    <div className="p-6">
    <Header />
      <h2 className="text-2xl mt-30 font-bold mb-4">Compare Destinations</h2>


      {selectedDestinations.length >= 2 ? (
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              {selectedDestinations.map((d) => ( <th key={d.id} className="border p-2">{d.title} / {d.city} </th>))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Avg. Hotel Price</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.hotelPrice || "N/A"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">User Rating</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.rating || "N/A"}
                </td>
              ))}
            </tr>
             <tr>
                  <td className="border p-2">Review</td>
                     {selectedDestinations.map((d) => (
                  <td key={d.id} className="border p-2">{d.review || "N/A"} </td> ))} </tr>
            <tr>
              <td className="border p-2">Best For</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.bestFor || "N/A"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Top Attractions</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.attractions || "N/A"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Best Season</td>
              {selectedDestinations.map((d) => (
                <td key={d.id} className="border p-2">
                  {d.season || "N/A"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">
          Select at least 2 destinations to compare.
        </p>
      )}
    </div>
  );
}
