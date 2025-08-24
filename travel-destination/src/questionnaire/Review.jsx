import React, { useState ,useRef , useContext} from "react";
import { Binoculars, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSharedState } from "./StateContext";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { InterestsData } from "../database/InterestsData";
import { dbstore } from "../auth/firebaseConfig"
import { collection, addDoc } from "firebase/firestore";



export default function Review() {


 const location = useLocation();
 const [rating , setRating] = useState(null);
 const [review , setReview] = useState("");
 const [reviewTitle , setReviewTitle] = useState("");
 const {id ,city} = location.state || {};



 async function handleSubmit(e) {
   e.preventDefault();

   try {

     const reviewsRef = collection(dbstore, "reviews");

     await addDoc(reviewsRef, {
       id: id,
       city: city,
       rating: rating,
       reviewTitle: reviewTitle,
       review: review,
       createdAt: new Date()
     });

     alert("✅ Review submitted successfully!");
     setRating(null);
     setReview("");
     setReviewTitle("");
   } catch (error) {
     console.error("❌ Error adding review:", error);
     alert("Something went wrong!");
   }
 }




  return (

    <div className="p-6 bg-white shadow-lg rounded-2xl mt-50 ml-10 mt-10 space-y-15 text-left">
    <Header />
      <h1 className="text-center font-bold text-5xl text-slate-800 "> Tell us how was your visit of {city}?</h1>
      <hr/>

      <div>
        <h2 className="text-lg font-semibold text-white-600 mb-5"> How would you rate your experience? </h2>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star}  className="w-20 h-10 rounded-full bg-gray-200 hover:bg-yellow-400" onClick={() => setRating(star)}> {star} </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white-600 mb-5"> Write your review </h2>
        <textarea placeholder="Share details about your experience..." rows="4"className="w-full p-3 border  border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setReview(e.target.value)}></textarea>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white-600 mb-5"> Title your review</h2>
        <input type="text" placeholder="Give your review a title" className="w-full p-3 border rounded-lg border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setReviewTitle(e.target.value)}/>
      </div>

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600" onClick={handleSubmit}> Continue</button>
    </div>
  );
}

