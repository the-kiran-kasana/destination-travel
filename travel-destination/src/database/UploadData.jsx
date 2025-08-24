// UploadData.js
import { collection, addDoc } from "firebase/firestore";
import { dbstore } from "../auth/firebaseConfig"
import { InterestsData }from "./InterestsData";


export default function UploadData() {

  async function uploadData() {
     try {
       for (const item of InterestsData) {
         const { icon, ...cleanItem } = item;
         await addDoc(collection(dbstore, "interests"), cleanItem);
       }
       console.log("Data uploaded successfully");
     } catch (e) {
       console.error("Error uploading data: ", e);
     }
   }


  return (
    <div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={uploadData} > Upload Data to Firebase</button>
    </div>
  );
}
