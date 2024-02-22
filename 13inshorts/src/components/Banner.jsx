import React from "react";

const Banner = () => {
  return (
    <div className="bg-red-500 text-white py-2 px-4 flex items-center justify-between mx-72">
      <div className="">
        For the best experience, use the <span className="font-bold">inshorts</span> app on your smartphone
      </div>
      <div className="flex items-center">
        <img
          src="https://assets.inshorts.com/website_assets/images/appstore.png"
          className="px-3 py-2 mr-2 rounded-md font-bold h-12"
        />

        <img
          src="https://assets.inshorts.com/website_assets/images/playstore.png"
          className="px-3 py-2  rounded-md font-bold h-12"
        />
      </div>
    </div>
  );
};

export default Banner;
