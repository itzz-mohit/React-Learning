import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3">Download our news app</h3>
            <p>Stay informed. All day, every day.</p>
            <div className="flex justify-center my-10">
              <div className="flex items-center mx-4">
                <img
                  src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
                  alt="Play Store"
                  className="h-12"
                />
              </div>
              <div className="flex items-center mx-4">
                <img
                  src="https://assets.inshorts.com/website_assets/images/contact_icon.png"
                  alt="App Store"
                  className="h-12"
                />
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              &copy; Beautiful Footer, 2021.
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
