function Banner() {
  return (
    <div className="flex items-center justify-center flex-col py-12 md:py-14 lg:py-16 px-6 md:px-16 lg:px-24 relative z-10">
      <div className="w-full h-full bg-black absolute top-0 left-0 -z-10">
        <img src="{item.icon}" alt="bgImg" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 uppercase mb-4 text-center">
        No <span className="text-indigo-600">Pain</span>, No <span className="text-indigo-600">Gain</span>
      </h1>
    </div>
  );
}

export default Banner;
