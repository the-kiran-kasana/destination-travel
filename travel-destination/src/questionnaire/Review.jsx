import React, { useState ,useRef , useContext} from "react";
import { Binoculars, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSharedState } from "./StateContext";


export default function Review() {



 const [rating , setRating] = useState(null);
 const [review , setReview] = useState("");
 const [reviewTitle , setReviewTitle] = useState("");



 function handleSubmit(e)
 {
  e.preventDefault();
  console.log(rating)
  console.log(reviewTitle)
  console.log(review)


 }



  return (
    <div className="p-6 bg-black shadow-lg rounded-2xl  ml-10 mt-10 space-y-15 text-left">
      <h1 className="text-2xl font-bold text-white-800"> Tell us how was your visit?</h1>

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
        <textarea placeholder="Share details about your experience..." rows="4"className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setReview(e.target.value)}></textarea>
      </div>


      <div>
        <h2 className="text-lg font-semibold text-white-600 mb-5"> Title your review</h2>
        <input type="text" placeholder="Give your review a title" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setReviewTitle(e.target.value)}/>
      </div>


      <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600" onClick={handleSubmit}> Continue</button>
    </div>
  );
}

