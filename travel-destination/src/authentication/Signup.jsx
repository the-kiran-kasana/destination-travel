// src/Signup.js
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error ,setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) => {

    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
        setError("email or password is invalid");
    }
  };

  return (
    <div className="flex items-center justify-center mt-100">
    <Header />
      <div className="bg-white p-10 rounded-xl shadow-lg w-100">
        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input type="email" placeholder="Email" className="border p-2 rounded border-slate-500" value={email}  onChange={(e) => setEmail(e.target.value)} />
          <input type="password"  placeholder="Password" className="border p-2 rounded border-slate-500" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          <p className="text-sm text-red-400 ">{error}</p>
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"> Signup </button>
        </form>
      </div>
    </div>
  );
}
