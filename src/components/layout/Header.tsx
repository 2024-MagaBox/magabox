import Navbar from "../organism/Navbar";

const Header = () => {
  return (
    <div className="w-full h-24 text-white bg-primaryColor font-bold flex justify-center items-center gap-32 fixed top-0">
      <Navbar />
    </div>
  );
};

export default Header;
