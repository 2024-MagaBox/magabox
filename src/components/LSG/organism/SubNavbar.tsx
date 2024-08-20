const SubNavbar = () => {
  return (
    <div className="w-full px-5 bg-subColor text-white flex">
      <div className="px-10 py-3 hover:cursor-pointer">전체</div>
      <div className="px-10 py-3 hover:cursor-pointer">미소지기Pick</div>
      <div className="px-10 py-3 hover:cursor-pointer">영화</div>
      <div className="px-10 py-3 hover:cursor-pointer">제휴/할인</div>
    </div>
  );
};

export default SubNavbar;
