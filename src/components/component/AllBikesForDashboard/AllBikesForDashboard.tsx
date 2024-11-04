import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useDeleteBikeMutation,
  useGetBikesQuery,
} from "../../../redux/Bikes/BikesApi";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const AllBikesForDashboard = () => {
  const { data: bikes, refetch } = useGetBikesQuery(undefined);
  console.log(bikes?.data);

  const [deleteBike] = useDeleteBikeMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBike(id).unwrap();
      Swal.fire({
        icon: "success",
        title: "Bike Is Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Bike Is Not Deleted Successfully",
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className=" py-10 ">
          <div className="w-4/5 mx-auto">
            <h2 className="text-3xl mb-2 font-bold text-center ">
              All <span className="text-red-500">Bikes</span> Hear!
            </h2>
            <div className="flex justify-center mt-2 mb-6">
              <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
            </div>
            {/* card show hear */}
            <div className="  mt-6 mb-4 ml-2 mr-2  ">
              {bikes?.data?.map(
                (bike: {
                  _id: Key | null | undefined;
                  photo: string | undefined;
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
                    className="  flex border border-red-500 p-5 border-r-2 shadow-2xl mt-3"
                    key={bike?._id}
                  >
                    <div className="w-1/12">
                      <img src={bike?.photo} alt="" />
                    </div>
                    <div className="mx-auto">
                      <h1 className="">{bike?.name}</h1>
                      <h1 className="">KTM Duke 1290</h1>
                      <h1 className="">KTM Duke 1290</h1>
                    </div>
                    <div className="flex ml-auto text-right">
                      <button
                        onClick={() => {
                          if (typeof bike?._id === "string") {
                            handleDelete(bike._id);
                          }
                        }}
                        className="btn bg-red-500 text-white py-2 mr-2 px-4 mt-3 font-bold"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <NavLink
                        to={`/admin-dashboard/all-bikes/${bike?._id}`}
                        className="btn bg-red-500 text-white py-2 px-4 mt-3 font-bold"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </NavLink>
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

export default AllBikesForDashboard;
