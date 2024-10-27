import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import {
  useGetAllUsersQuery,
  usePromoteToAdminMutation,
} from "../../../redux/Bikes/BikesApi";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users, refetch } = useGetAllUsersQuery(undefined);
  //   console.log(users?.data);
  const allUsers = users?.data;
  const [promoteToAdmin, { isLoading }] = usePromoteToAdminMutation();

  const handlePromote = async (userId: unknown) => {
    console.log(typeof userId);
    try {
      window.location.reload();
      await promoteToAdmin(userId);
      window.location.reload();

      Swal.fire({
        icon: "success",
        title: "Promote to Admin successfully ",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (err) {
      console.error("Failed to promote user:", err);
    }
    window.location.reload();
  };
  return (
    <div className="mb-2">
      {allUsers?.map(
        (user: {
          _id(_id: unknown): void;
          email: ReactNode;
          role: ReactNode;
          name:
            | string
            | number
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<unknown>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div className=" mb-5 mt-2 shadow-xl">
            <div className="flex justify-between w-full">
              <div>
                <h1>{user?.email}</h1>
              </div>
              <div className="text-right sm:block md:block">
                <h1>{user?.role}</h1>
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => handlePromote(user?._id)}
                  disabled={isLoading}
                >
                  Promote to admin
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AllUsers;
