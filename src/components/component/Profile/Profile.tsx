import { useGetProfileQuery } from "../../../redux/Bikes/BikesApi";

const Profile = () => {


    const {data : userProfile}  = useGetProfileQuery(undefined)
    console.log(userProfile?.data)
    const Profile = userProfile?.data;
  return (
    <div className="grid grid-cols-5">
      <div className=" col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky h-screen">
        <div className="w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-square bg-blue-500 rounded-full overflow-hidden mx-auto">
          <img
            src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg"
            alt=""
          />
        </div>
        <h1 className="text-center">{Profile?.name}</h1>
        <h1 className="text-center">{Profile?.email}</h1>
        <h1 className="text-center">{Profile?.phone}</h1>
      </div>
      <div className=" col-span-4 mx-auto">
            <div className="mt-3">
                <h1>Name</h1>
            <h1>{Profile?.name}</h1>
            </div>
            <div className="mt-3">
                <h1>Email</h1>
            <h1>{Profile?.email}</h1>
            </div>
            <div className="mt-3">
                <h1>Phone Number</h1>
            <h1>{Profile?.phone}</h1>
            </div>
            <div className="mt-3">
                <h1>Role</h1>
            <h1>{Profile?.role}</h1>
            </div>
            <div className="mt-3">
                <h1>Address</h1>
            <h1>{Profile?.address}</h1>
            </div>
      </div>
    </div>
  );
};

export default Profile;
