import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
              <th className="py-3 px-6 text-left">User Gmail</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {allUsers?.map(
              (
                user: {
                  _id(_id: unknown): void;
                  email: ReactNode;
                  role: ReactNode;
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
                },
                index: Key | null | undefined
              ) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{user?.email}</td>
                  <td className="py-3 px-6 text-left">{user?.role}</td>
                  <td className="py-3 px-6 text-center">
                    {user?.role === "admin" ? (
                      <div>
                        <p>Already admin</p>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn"
                          onClick={() => handlePromote(user?._id)}
                          disabled={isLoading}
                        >
                          Promote to admin
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
