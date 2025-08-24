import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function DestinationMap({ place }) {
  if (!place.lat || !place.lng) return <p>Location not available</p>;

  return (
    <MapContainer center={[place.lat, place.lng]} zoom={6} className="h-[500px] w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[place.lat, place.lng]}>
        <Popup className="text-black">
          <h3 className="font-bold">{place.city}</h3>
          <p>{place.description}</p>
          <p>⭐ {place.rating}</p>
          <p>{place.review}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}