const images = [
    { index: 0, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1724602650/harley-davidson-wxSb4-Lxt3Y-unsplash_jgo6d9.jpg" },
    { index: 1, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/v1724603990/istockphoto-507636756-1024x1024_gdhcea.jpg" },
    { index: 2, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/v1724601933/logan-weaver-lgnwvr-0fiuoIIfl9g-unsplash_1_moiaxv.jpg" },
    { index: 3, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/v1724602650/harley-davidson-wxSb4-Lxt3Y-unsplash_jgo6d9.jpg" },
    { index: 4, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/v1724603990/istockphoto-507636756-1024x1024_gdhcea.jpg" },
    { index: 5, imgUrl: "https://res.cloudinary.com/sayed-ltd/image/upload/v1721029447/image/yogendra-singh-dE3exzmYlKc-unsplash_n4ola8.jpg" }
  ];
  
const ImageGallery = () => {
    return (
        <div className="mt-16">
        <h2 className="text-3xl mb-2 font-bold text-center">
          BIKES <span className="text-red-500">IMAGES</span> GALLERY
        </h2>
        <div className="flex justify-center mt-2">
          <div className="h-2 w-12 rounded-lg text-center bg-red-500"></div>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {images.map(({ index, imgUrl }) => (
              <div key={index} className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    src={imgUrl}
                    alt={`Product ${index + 1}`}
                    className="block h-full w-full rounded-lg object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;