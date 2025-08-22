import React from "react";

function DestinationCard({ city, image, rating, descriptions,review}) {
  return (
    <div className="border p-4 rounded shadow-md m-2 flex-col items-center justify-center ">
      <img src={image} className="h-42 w-full rounded-lg object-cover"/>
      <h2 className="text-lg font-bold">{city}</h2>
      <p className="text-sm text-gray-600">{descriptions || "No description"}</p>
      <div className="flex gap-4 mt-2">
        <p> rating : {rating}</p>
        <p> {review}</p>
      </div>
    </div>
  );
}

export default DestinationCard;