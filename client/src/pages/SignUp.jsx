import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OAuth from "../components/OAuth.jsx";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(false);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.username} // Controlled input
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.email} // Controlled input
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.password} // Controlled input
        />
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-3 p-3">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignUp;
