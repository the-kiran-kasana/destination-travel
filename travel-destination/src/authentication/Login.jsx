// src/Login.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import Header from "../components/Header";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error ,setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log(email.password)
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/Interests");
    } catch (error) {
      setError("email or password is invalid");
    }
  };

  return (
    <div className="flex  items-center justify-center mt-100">
    <Header />
      <div className="bg-white p-10 rounded-xl shadow-lg w-100">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input type="email" placeholder="Email" className="border p-2 rounded border-slate-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="border p-2 rounded border-slate-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600"> Login </button>
          <p className="text-sm text-red-400 mb-1 ">{error}</p>
          <p className="text-sm text-gray-400 mb-1 ">If you haven't account  <Link className="text-blue-700" to="/Signup">Signup</Link> </p>

        </form>
      </div>
    </div>
  );
}
