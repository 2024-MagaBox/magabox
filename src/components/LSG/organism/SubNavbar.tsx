import Button from "../atom/Button";

const SubNavbar = () => {
  return (
    <div className="w-full fixed top-24 px-5 bg-subColor text-white flex">
      <Button title="전체" />
      <Button title="미소지기Pick" />
      <Button title="영화" />
      <Button title="제휴/할인" />
    </div>
  );
};

export default SubNavbar;
