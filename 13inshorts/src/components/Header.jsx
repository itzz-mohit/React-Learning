import { Dropdown } from "./index";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="flex justify-between items-center bg-white p-4 shadow-md">
        {/* <Dropdown /> */}

        <img
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt="Inshorts Logo"
          className="h-12 mx-auto"
        />
      </div>
    </div>
  );
};

export default Header;
