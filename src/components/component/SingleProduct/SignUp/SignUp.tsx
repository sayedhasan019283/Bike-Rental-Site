import { useState } from "react";
import { useSignUpMutation } from "../../../../redux/Bikes/BikesApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });

  const [signUp] = useSignUpMutation();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp(formData).unwrap();
      console.log(formData);
      Swal.fire({
        icon: "success",
        title: "sign Up Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");

      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Form submission failed",
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} action="">
        <div className="sm:w-3/6 md:w-3/6 lg:w-2/6 mx-auto border p-5 m-10 border-red-500 border-r-2  shadow-xl ">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <div className="flex justify-center mt-2 mb-6">
            <div className="h-1 w-8 rounded-lg text-center bg-red-500"></div>
          </div>
          <div className="relative mt-8 m-10">
            <input
              type="name"
              name="name"
              id="name"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Name
            </label>
          </div>
          <div className="relative mt-8 m-10">
            <input
              type="email"
              name="email"
              id="email"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Email
            </label>
          </div>
          <div className="relative mt-8 m-10">
            <input
              type="password"
              name="password"
              id="password"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Password
            </label>
          </div>
          <div className="relative mt-8 m-10">
            <input
              type="phone"
              name="phone"
              id="phone"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="phone"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Phone
            </label>
          </div>
          <div className="relative mt-8 m-10">
            <input
              type="address"
              name="address"
              id="address"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="address"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Address
            </label>
          </div>
          {/* <div className="relative mt-8 m-10">
            <input
              type="role"
              name="role"
              id="role"
              className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
              autoComplete="off"
              value={formData.role}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="role"
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
            >
              Your Roll
            </label>
          </div> */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md mt-5 hover:bg-orange-500 transition-colors duration-700 ease-in-out"
          >
            Sign Up
          </button>
          <div className="">
            <p className="text-center p-3">Already have an account? <a className="text-blue-500 underline" href="/login">Login</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
