import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  FaAngleDown, FaAngleUp } from "react-icons/fa";
// FaSearch
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  useGetBikesQuery,
  useGetFilteredProductsQuery,
} from "../../../redux/Bikes/BikesApi";
import { NavLink } from "react-router-dom";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const AllBikes = () => {
  // States for each filter section
  // const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isCheeseOpen, setIsCheeseOpen] = useState(true);
  const [isDairyOpen, setIsDairyOpen] = useState(true);
  // const [isQuantityOpen, setIsQuantityOpen] = useState(true);
  // const [priceRange, setPriceRange] = useState([1, 15]);

  const [filters, setFilters] = useState({ brand: "", price: "" });
  const { data: bikes } = useGetBikesQuery(undefined);
  const { data: products } = useGetFilteredProductsQuery(filters);
  console.log(bikes?.data);
  console.log(products);
  const toggleSection = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ): void => {
    setOpen((prev) => !prev);
  };
  const initialFilters = { brand: "", price: "" }
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  const resetFilters = () => {
    setFilters(initialFilters);
  };
  AOS.init();
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5  ">
      <div className="col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky">
        {/* <h1 className="text-center font-bold text-xl">This is Filter part </h1>
        <div className="flex justify-between ">
          <div className="ml-3">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                Filter By Brand
              </summary>
              <div className="collapse-content">
                <label>
                  <input
                    type="radio"
                    name="brand"
                    value="Apachi"
                    checked={filters.brand === "Apachi"}
                    onChange={handleFilterChange}
                  />
                  Apachi
                </label>
              </div>
            </details>
          </div>

          <div className="">
            <details className="collapse ">
              <summary className="collapse-title text-xl font-medium">
                Filter By Price
              </summary>
              <div className="collapse-content">
              <label>
              <input
                type="radio"
                name="price"
                value="100"
                checked={filters.price === "100"}
                onChange={handleFilterChange}
              />
              $100
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="price"
                value="10000"
                checked={filters.price === "10000"}
                onChange={handleFilterChange}
              />
              $400
            </label>
              </div>
            </details>
            
          </div>
          <div className="mr-3"></div>
        </div> */}
        <div className="p-4 w-64  border-gray-200 py-5 mt-5">
          {/* Search Box */}
          {/* <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-2 py-1 rounded-l"
            />
            <button className="bg-gray-200 p-2 rounded-r">
              <FaSearch />
            </button>
          </div> */}

          {/* Filter Sections */}
          {/* Category */}
          {/* <div className="mb-4">
            <button
              onClick={() => toggleSection(setIsCategoryOpen)}
              className="flex justify-between w-full"
            >
              <span>Category</span>
              {isCategoryOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isCategoryOpen && (
              <div className="mt-2 ml-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Products
                </label>
              </div>
            )}
          </div> */}

          {/* Cheese */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection(setIsCheeseOpen)}
              className="flex justify-between w-full"
            >
              <span>Brand</span>
              {isCheeseOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isCheeseOpen && (
              <div className="mt-2 ml-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="brand"
                    value="Apachi"
                    checked={filters.brand === "Apachi"}
                    onChange={handleFilterChange} />
                  Apachi
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="brand"
                    value="TVS"
                    checked={filters.brand === "TVS"}
                    onChange={handleFilterChange} />
                  TVS
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="brand"
                    value="Suzuki"
                    checked={filters.brand === "Suzuki"}
                    onChange={handleFilterChange} />
                  Suzuki
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="brand"
                    value="KTM"
                    checked={filters.brand === "KTM"}
                    onChange={handleFilterChange} />
                  KTM
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="brand"
                    value="Yamaha"
                    checked={filters.brand === "Yamaha"}
                    onChange={handleFilterChange} />
                  Yamaha
                </label>
              </div>
            )}
          </div>

          {/* Dairy */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection(setIsDairyOpen)}
              className="flex justify-between w-full"
            >
              <span>Price</span>
              {isDairyOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isDairyOpen && (
              <div className="mt-2 ml-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="100"
                checked={filters.price === "100"}
                onChange={handleFilterChange}/>
                  $100
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="200"
                checked={filters.price === "200"}
                onChange={handleFilterChange}/>
                  $200
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="300"
                checked={filters.price === "300"}
                onChange={handleFilterChange}/>
                  $300
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="400"
                checked={filters.price === "400"}
                onChange={handleFilterChange}/>
                  $400
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="500"
                checked={filters.price === "500"}
                onChange={handleFilterChange}/>
                  $500
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="600"
                checked={filters.price === "600"}
                onChange={handleFilterChange}/>
                  $600
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="700"
                checked={filters.price === "700"}
                onChange={handleFilterChange}/>
                  $700
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="800"
                checked={filters.price === "800"}
                onChange={handleFilterChange}/>
                  $800
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="900"
                checked={filters.price === "900"}
                onChange={handleFilterChange}/>
                  $900
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" name="price"
                value="1000"
                checked={filters.price === "1000"}
                onChange={handleFilterChange}/>
                  $1000
                </label>
              </div>
            )}
          </div>
            <div className="btn bg-red-700 text-white items-center">
            <button onClick={resetFilters}>Reset Filters</button>
            </div>
          {/* Quantity */}
          {/* <div className="mb-4">
            <button
              onClick={() => toggleSection(setIsQuantityOpen)}
              className="flex justify-between w-full"
            >
              <span>QUANTITY</span>
              {isQuantityOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {isQuantityOpen && (
              <div className="mt-2 ml-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  100gr
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  1kg
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  1L Bottled
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  500gr
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  500ml
                </label>
              </div>
            )}
          </div> */}

          {/* Price Slider */}
          {/* <div className="mb-4">
            <button className="flex justify-between w-full">
              <span>Price</span>
            </button>
            <div className="mt-2">
              <input
                type="range"
                min="1"
                max="15"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([+e.target.value, priceRange[1]])
                }
                className="w-full"
              />
              <input
                type="range"
                min="1"
                max="15"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], +e.target.value])
                }
                className="w-full"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>${priceRange[0].toFixed(2)}</span>
                <span>${priceRange[1].toFixed(2)}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="col-span-4 bg-base-200">
        <div className=" py-1">
        <div className="grid  gap-5 mb-5">
            {/* card show hear */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-4 ml-2 mr-2 h-full">
              {(products && products.length > 0 ? products : bikes?.data)?.map(
                (bike: {
                  pricePerHour: ReactNode;
                  brand: ReactNode;
                  photo: string | undefined;
                  _id: Key | null | undefined;
                  name:
                    | string
                    | number
                    | boolean
                    | ReactElement<
                        unknown,
                        string | JSXElementConstructor<unknown>
                      >
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                }) => (
                  <div
                    className="grid-cols-1 border border-red-500 p-5 border-r-2 shadow-2xl"
                    key={bike._id}
                  >
                    <div className="">
                      <img
                      className="w-full h-48 object-cover"
                        src={bike?.photo}
                        alt=""
                      />
                    </div>

                    <div className="flex">
                      <div>
                        <h1>{bike?.name}</h1>
                        <p>model: {bike?.brand}</p>
                        <NavLink
                          to={`/${bike?._id}`}
                          className="btn bg-red-500 text-white py-2 px-4 mt-7 font-bold"
                        >
                          View Details
                        </NavLink>
                      </div>
                      <div className="ml-auto text-right">
                        <h3>৳{bike?.pricePerHour}</h3>
                        <p className="text-sm">/Hour</p>
                        <p className="mt-8">991 Reviews</p>
                        <div className="">
                          <p>
                            <FontAwesomeIcon
                              className="text-yellow-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="text-yellow-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="text-yellow-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="text-yellow-500"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="text-yellow-500"
                              icon={faStar}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBikes;
