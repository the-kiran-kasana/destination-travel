import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);



  const fetchPins = async () => {
    const token = "YAIzaSyAUUnmuFRp5EVi0OvJFqW1E4Wxj3eYTQuc"; // Replace with your Pinterest API token
    const response = await fetch(
      `https://api.pinterest.com/v5/search/pins?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    // Extract image URLs from response
    const results = data.items?.map((pin) => pin.media.images.original.url);
    setImages(results || []);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Pinterest Image Search</h1>

      <input
        type="text"
        placeholder="Search Pinterest..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded mr-2"
      />

      <button
        onClick={fetchPins}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="Pinterest Pin"
            className="rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}
