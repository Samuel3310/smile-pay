import { useState } from "react";
import Form from "../../../components/form";
import { Link, useNavigate } from "react-router-dom";
import { FaRegSmileWink } from "react-icons/fa";
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("store", JSON.stringify(formData));
    navigate("/login");
    console.log(formData);
  };

  return (
    <section className="w-full h-screen grid items-center px-4 justify-center">
      <div className="md:w-[600px] sm:w-[400px] w-full shadow-lg py-5 px-5 border rounded-md ">
        <h1 className="text-center mb-6 font-bold ">
          Welcome to{" "}
          <span className="uppercase text-purple-700">Smile&apos;s Pay</span>
        </h1>
        <p className="flex justify-center text-[50px] animate-bounce mt-3 text-purple-600">
          <FaRegSmileWink size={80} />
        </p>

        <form className=" flex flex-col gap-7" onSubmit={handleSubmit}>
          <Form
            id="fullName"
            label="Full Name"
            type="text"
            handleChange={handleChange}
          />
          <Form
            id="email"
            label="email address"
            type="email"
            handleChange={handleChange}
          />
          <Form
            id="number"
            label="number"
            type="number"
            handleChange={handleChange}
          />
          <Form
            id="address"
            label="address"
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
              Sign Up
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
