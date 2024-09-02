
const Profile = () => {
    return (
        <div className="grid grid-cols-5">
            <div className=" col-span-1 bg-gradient-to-r from-red-500 to-orange-400 text-gray-100 sticky">
            <div className="w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 aspect-square bg-blue-500 rounded-full overflow-hidden">
            <img src="https://res.cloudinary.com/sayed-ltd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg" alt="" />
            
            </div>
            </div>
            <div className=" col-span-4 bg-base-200">2</div>
        </div>
    );
};

export default Profile;