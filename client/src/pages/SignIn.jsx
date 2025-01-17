/* eslint-disable no-unused-vars */

import React,{ useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {signInStart, signInSuccess, signInFailure} from "../redux/user/userSlice";
import OAuth from "../components/OAuth.jsx";

const SignIn = () => {

  const [formData, setFormData] = useState({});  
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">SignIn</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.email} 
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.password} 
        />
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-3 p-3">
        <p>Do not have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </Link>
      </div>
      {error && <p className="hidden text-red-500 ">{error}</p>}
    </div>
  );
};



export default SignIn;