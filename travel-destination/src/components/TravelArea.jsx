import React, { useEffect, useState } from "react";

export default function StateTravelImages({ stateName = "Rajasthan" }) {
 const [images, setImages] = useState([]);


  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=Rajasthan&client_id=YOUR_ACCESS_KEY`)
      .then(res => res.json())
      .then(data => {
        console.log(data); // inspect response
        setImages(data.results || []); // safely assign
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div>
        {images.length > 0 ? (
          images.map(img => (
            <img key={img.id} src={img.urls.small} alt={img.alt_description} />
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
  );
}
