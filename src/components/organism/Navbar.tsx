import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/event"}>이벤트</Link>
      <Link to={"/"}>
        <img src="/img/logo-white_new2.png" />
      </Link>
      <Link to={"/store"}>스토어</Link>
    </>
  );
};

export default Navbar;
