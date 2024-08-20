import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-full flex flex-nowrap justify-center">
      <div className="flex text-white m-10 gap-10">
        <Link to={"/event"}>이벤트</Link>
        <Link to={"/store"}>스토어</Link>
      </div>
      <div className="h-full flex items-center justify-center mx-20">
        <Link to={"/"}>
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new2.png"
            alt="MegaBox"
          />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
