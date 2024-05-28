import { useEffect, useState } from "react";
import Form from "../../../components/form";
import { Link, useNavigate } from "react-router-dom";
import { FaRegSmileWink } from "react-icons/fa";
const storedData = window.localStorage.getItem("store");
const LogIn = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
    console.log(formData);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginData.email === formData.email &&
      loginData.password === formData.password
    ) {
      navigate("/dashboard");
      sessionStorage.setItem("user", JSON.stringify(loginData));
    } else {
      alert("Wrong email or password");
    }
  };
  return (
    <section className="w-full h-screen grid items-center px-4 justify-center">
      <div className="md:w-[600px] sm:w-[400px] w-full shadow-lg py-5 px-5 border rounded-md ">
        <h1 className="text-center mb-6 font-bold ">
          Welcome back to
          <span className="uppercase text-purple-700"> Smile&apos;s Pay</span>
        </h1>
        <p className="flex justify-center text-[50px] animate-bounce mt-3 text-purple-600">
          <FaRegSmileWink size={80} />
        </p>

        <form className=" flex flex-col gap-7" onSubmit={handleSubmit}>
          <Form
            id="email"
            label="email"
            type="text"
            handleChange={handleChange}
          />
          <Form
            id="password"
            label="password"
            type="password"
            handleChange={handleChange}
          />
          <div>
            <button
              className="bg-purple-600 py-2 px-10 rounded-md text-white"
              type="submit"
            >
              Login
            </button>
          </div>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-purple-600">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
