import React, { useEffect, useState } from "react";
import { auth ,db} from "../auth/firebaseConfig";
import { ref, set, get, child, update } from "firebase/database";
import {UserRound} from "lucide-react";
import Header from "../components/Header";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    preferences: "",
    pastTrips: [],
    favorites: []
  });

  const [loading, setLoading] = useState(true);

  // Fetch profile when user logs in
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = child(ref(db), `users/${user.uid}`);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.val());
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  // Save profile data
  const saveProfile = () => {
    const user = auth.currentUser;
    if (user) {
      set(ref(db, `users/${user.uid}`), profile)
        .then(() => alert("Profile saved!"))
        .catch((err) => console.error(err));
    }
  };

  // Add new trip
  const addTrip = (trip) => {
    const updatedTrips = [...profile.pastTrips, trip];
    setProfile({ ...profile, pastTrips: updatedTrips });

    const user = auth.currentUser;
    if (user) {
      update(ref(db, `users/${user.uid}`), { pastTrips: updatedTrips });
    }
  };

  // Add favorite destination
  const addFavorite = (destination) => {
    const updatedFavorites = [...profile.favorites, destination];
    setProfile({ ...profile, favorites: updatedFavorites });

    const user = auth.currentUser;
    if (user) {
      update(ref(db, `users/${user.uid}`), { favorites: updatedFavorites });
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
   <>
    <Header />
    <div className="p-6 max-w-lg mx-auto shadow-md mt-30 rounded-lg bg-white">
      <UserRound className="flex justify-center items-center" />
      <h2 className="text-2xl font-bold mb-4 ">User Profile</h2>

      <label for="Name">Name</label>
      <input type="text" placeholder="Your Name"  value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="border p-2 w-full mb-4" />
      <label for="Email">Email</label>
      <input type="email" placeholder="Your Email"  value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="border p-2 w-full mb-4" />
      <label for="Location">Location</label>
      <input type="text" placeholder="Your Location"  value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="border p-2 w-full mb-4" />
      <label for="Preferences">Preferences</label>
      <input type="text" placeholder="Your Preferences (e.g., beaches, mountains)" value={profile.preferences} onChange={(e) => setProfile({ ...profile, preferences: e.target.value })} className="border p-2 w-full mb-4" />

      <button onClick={saveProfile} className="bg-slate-700 text-white px-4 py-2 rounded" >  Save Profile </button>

      <h3 className="mt-6 font-semibold">Past Trips</h3>
      <ul className="list-disc ml-6">
        {profile.pastTrips.map((trip, i) => (
          <li key={i}>{trip}</li>
        ))}
      </ul>
      <button onClick={() => addTrip("Goa")} className="mt-2 bg-green-500 text-white px-3 py-1 rounded" > Add Goa Trip</button>

      <h3 className="mt-6 font-semibold">Favorites</h3>
      <ul className="list-disc ml-6">
        {profile.favorites.map((fav, i) => (
          <li key={i}>{fav}</li>
        ))}
      </ul>
      <button onClick={() => addFavorite("Paris")} className="mt-2 bg-purple-500 text-white px-3 py-1 rounded" > Add Paris Favorite </button>
    </div>
     <footer className="bg-sky-950 text-white py-6 text-center w-full fixed bottom-0 left-0 z-50"> <p>© 2025 TravelMate. All rights reserved.</p> </footer>

    </>
  );
}
