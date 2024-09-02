import { useState } from "react";
import { useAddBikeMutation } from "../../../redux/Bikes/BikesApi";
// import axios from 'axios';
import Swal from "sweetalert2";


// const img_hosting_token = "622e0d92c5c1dfc5ba8cf9cab3a6e860";
// const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerHour: "",
    cc: "",
    year: "",
    model: "",
    brand: "",
    photo: ""
  });

  const [addBike] = useAddBikeMutation();

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: 
        name === "pricePerHour" || name === "cc" || name === "year"
          ? Number(value)
          : value,
    }));
  };

  // const handlePhotoUpload = async (file) => {
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const response = await axios.post(img_hosting_url, formData);
  //     return response.data.data.display_url; // Return the URL of the uploaded image
  //   } catch (error) {
  //     console.error("Failed to upload image:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Image upload failed",
  //       text: "Please try again.",
  //     });
  //   }
  // };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addBike(formData).unwrap();

      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Clear the input fields by resetting the formData state
      setFormData({
        name: "",
        description: "",
        pricePerHour: "",
        cc: "",
        year: "",
        model: "",
        brand: "",
        photo: ''
      });

    } catch (error) {
      console.error("Failed to submit form:", error);
      Swal.fire({
        icon: "error",
        title: "Form submission failed",
      });
      
    }
  };

  return  (
    <div className="w-2/3 mx-auto mt-10">
      <h2 className="text-3xl mb-2 font-bold text-center mt-5">
        Add <span className="text-red-500">New</span> Bikes?
      </h2>
      <div className="flex justify-center mt-2 mb-6">
        <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 bg-white shadow-2xl rounded"
        >
          <div className="">
            <div className="relative mt-8">
              <input
                type="text"
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
                Bike Name
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="text"
                name="brand"
                id="brand"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.brand}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="brand"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                Brand Name
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="text"
                name="description"
                id="description"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="description"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                Bike Description
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="number"
                name="cc"
                id="cc"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.cc}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="cc"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                CC
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="number"
                name="year"
                id="year"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.year}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="year"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                year
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="text"
                name="model"
                id="model"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.model}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="model"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                Model Name
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="number"
                name="pricePerHour"
                id="pricePerHour"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.pricePerHour}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="pricePerHour"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                Price Per Hour
              </label>
            </div>
            <div className="relative mt-8">
              <input
                type="text"
                name="photo"
                id="photo"
                className="border-b py-1 w-full focus:outline-none focus:border-red-500 focus:border-b-2 transition-colors duration-1000 peer"
                autoComplete="off"
                value={formData.photo}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="photo"
                className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:text-red-500 peer-focus:-top-4 peer-valid:text-xs peer-valid:text-red-500 peer-valid:-top-4 transition-all duration-1000"
              >
                Photo Link
              </label>
            </div>
            {/* <div className="mt-3">
              <input
                type="file"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  const photoUrl = await handlePhotoUpload(file);
                  setFormData((prevData) => ({
                    ...prevData,
                    photo: photoUrl,
                  }));
                }}
              />
            </div> */}
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md mt-5 hover:bg-orange-500 transition-colors duration-700 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

