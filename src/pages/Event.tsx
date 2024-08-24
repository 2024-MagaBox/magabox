import SubNavbar from "../components/LSG/organism/SubNavbar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CategoryTitle from "../components/LSG/molecules/CategoryTitle";
import EventCardGroup from "../components/LSG/molecules/EventCardGroup";

const Event = () => {
  return (
    <>
      <SubNavbar />

      {/*  */}
      <div className="w-full max-w-screen-lg mx-auto py-3">
        <div className="py-7 text-lg font-bold">전체</div>
        <div className="flex gap-3 items-center mb-20">
          <ArrowBackIosNewRoundedIcon className="hover:cursor-pointer" />
          <div className="w-full h-96 p-5 bg-gray flex"></div>
          <ArrowForwardIosRoundedIcon className="hover:cursor-pointer" />
        </div>

        <CategoryTitle title="미소지기 Pick" />
        <EventCardGroup />
        <CategoryTitle title="영화" />
        <EventCardGroup />
        <CategoryTitle title="제휴할인" />
        <EventCardGroup />
      </div>
    </>
  );
};

export default Event;
