import React, { useEffect, useState } from "react";
import { UserRound } from "lucide-react";
import { auth, db } from "../auth/firebaseConfig";
import { ref, set, get, push, update } from "firebase/database";
import Header from "../components/Header";

export default function UserProfile() {

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB");

  const [user, setUser] = useState(null);
  const [newHistory, setNewHistory] = useState("");
  const [newFavorite, setNewFavorite] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    location: "",
    preferences: {
      beaches: false,
      budget: false,
      adventure: false,
    },
    history: [],
    favorites: [],
  });



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const profileRef = ref(db, `users/${currentUser.uid}/profile`);
        get(profileRef).then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
            console.log(profile)
          }
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Save or update profile
  const handleSaveProfile = () => {
    if (!user) return;
    const profileRef = ref(db, `users/${user.uid}/profile`);
    set(profileRef, profile);
  };

  // Add new history
  const addHistory = () => {
    if (!user || !newHistory.trim()) return;
    const historyRef = ref(db, `users/${user.uid}/profile/history`);
    const updatedHistory = [...(profile.history || []), newHistory];
    update(ref(db, `users/${user.uid}/profile`), { history: updatedHistory });
    setProfile({ ...profile, history: updatedHistory });
    setNewHistory("");
  };

  // Add new favorite
  const addFavorite = () => {
    if (!user || !newFavorite.trim()) return;
    const favoritesRef = ref(db, `users/${user.uid}/profile/favorites`);
    const updatedFavorites = [...(profile.favorites || []), newFavorite];
    update(ref(db, `users/${user.uid}/profile`), { favorites: updatedFavorites });
    setProfile({ ...profile, favorites: updatedFavorites });
    setNewFavorite("");
  };

  return (

  <>
    <div className="p-8 max-w-6xl ml-10 mx-auto space-y-6 flex gap-20">
    <Header />

      <div className="bg-white  shadow-md mt-30 rounded-xl p-6">
        <div className="flex flex-col items-center mb-6"> <UserRound size={50} className="text-slate-600 mb-1 h-10" /> <h2 className="text-3xl font-bold">User Profile</h2> </div>
        <label className="flex font-bold" >Name : </label>
        <input type="text"  placeholder="Name"  value={profile.name}  onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="border p-2 rounded w-full mb-2" />
        <label className="flex font-bold" >Email : </label>
        <input type="email" placeholder="Email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="border p-2 rounded w-full mb-2" />
        <label className="flex font-bold" >Location : </label>
        <input type="text" placeholder="Location" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })}  className="border p-2 rounded w-full mb-2" />
        <label className="flex font-bold" >Preferences : </label>
        <div className="flex gap-4">
                  {["beaches", "budget", "adventure","culture","luxury"].map((pref) => (
                    <label key={pref} className="flex items-center gap-2">
                      <input type="checkbox" checked={profile.preferences[pref]} onChange={(e) =>  setProfile({ ...profile,
                            preferences: {  ...profile.preferences,  [pref]: e.target.checked,  },  }) } />
                      {pref}
                    </label>
                  ))}
                </div>
        <button onClick={handleSaveProfile} className="bg-blue-500 text-white px-4 py-2 mt-5 rounded" >  Save Profile </button>
      </div>



      {/* History Tracking */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-30 ">
        <h2 className="text-xl font-bold mb-4">History</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Add past trip"  value={newHistory} onChange={(e) => setNewHistory(e.target.value)} className="border p-2 rounded flex-1" />
          <button onClick={addHistory} className="bg-gray-300 text-white px-4 py-2 rounded" >  ➕ </button>
        </div>
       <ul className="list-disc pl-6">
         <li className="font-semibold">
           <span className="mr-6">S.No</span>
           <span className="mr-6">Date</span>
           <span className="mr-6">Location</span>
           <span>Preferences</span>
         </li>

         {profile.history?.map((trip, i) => (
           <li key={i}>
{/*              <span className="mr-6">{i + 1}.</span> */}
             <span className="mr-6">{formattedDate}</span>
             <span className="mr-6">{trip.location}</span>
             <span>{trip.preferences}</span>
           </li>
         ))}
       </ul>
      </div>

      {/* Favorite Destinations */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-30">
        <h2 className="text-xl font-bold mb-4">Favorite Destinations</h2>
        <div className="flex gap-2 mb-4">
          <input type="text" placeholder="Add favorite destination" value={newFavorite} onChange={(e) => setNewFavorite(e.target.value)}  className="border p-2 rounded flex-1" />
          <button onClick={addFavorite} className="bg-yellow-800 text-white px-4 py-2 rounded" > ⭐ </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {profile.favorites?.map((fav, i) => (
            <span key={i} className="bg-yellow-100 px-3 py-1 rounded-full text-sm" > {fav} </span>
          ))}
        </div>
      </div>


    </div>
    <footer className="bg-sky-950 text-white py-6 text-center w-full fixed bottom-0 left-0 z-50"> <p>© 2025 TravelMate. All rights reserved.</p> </footer>
    </>
  );
}
