import SubNavbar from "../components/LSG/organism/SubNavbar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Event = () => {
  return (
    <>
      <SubNavbar />

      {/* Contents */}
      <div className="w-full max-w-screen-lg mx-auto py-3">
        <div className="py-5 text-lg font-bold">전체</div>

        <div className="flex gap-3 items-center">
          <ArrowBackIosNewRoundedIcon className="hover:cursor-pointer" />
          <div className="w-full h-96 bg-gray"></div>
          <ArrowForwardIosRoundedIcon className="hover:cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Event;
