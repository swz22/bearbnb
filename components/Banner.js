import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h=[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Discover the beauty of nature with Bearbnb.</p>
        <button className="text-red-400 bg-white px-7 py-3 shadow-md rounded-full font-medium my-6 hover:shadow-xl active:scale-90 transition duration-150">
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Banner;
