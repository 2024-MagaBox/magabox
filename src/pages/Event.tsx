import SubNavbar from "../components/LSG/organism/SubNavbar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import TestImage from "../components/LSG/atom/TestImage";
import EventCard from "../components/LSG/molecules/EventCard";

const Event = () => {
  return (
    <>
      <SubNavbar />

      <div className="w-full max-w-screen-lg mx-auto py-3">
        {/* Top Content */}
        <div className="py-7 text-lg font-bold">전체</div>
        <div className="flex gap-3 items-center mb-20">
          <ArrowBackIosNewRoundedIcon className="hover:cursor-pointer" />
          <div className="w-full h-96 p-5 bg-gray flex"></div>
          <ArrowForwardIosRoundedIcon className="hover:cursor-pointer" />
        </div>

        {/* Bottom Content */}
        <div>
          <div className="py-7 text-lg font-bold">미소지기 Pick</div>
        </div>
        <div className="w-full flex gap-10 mb-20">
          <EventCard
            imgsrc="/img/eventLinkImg-1.jpg"
            title="[프로모션][굿즈] <메가박스X위글위글> 콤보 런칭!"
            period="2024.08.21 ~ 2024.10.30"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-2.jpg"
            title="메가박스 오리지널 슬라이드 No.1 <본 아이덴티티>"
            period="2024.08.20 ~ 2024.09.20"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-3.jpg"
            title="[라이브뷰잉] hololive English 2nd Concert"
            period="2024.08.25 ~ 2024.08.26"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-4.jpg"
            title="<룩백> 프리미어 상영회"
            period="2024.08.31 ~ 2024.09.01"
          />
        </div>

        {/*  */}
        <div className="py-7 text-lg font-bold">영화</div>
        <div className="flex gap-10 overflow-auto snap-x snap-proximity mb-20">
          <EventCard
            imgsrc="/img/eventLinkImg-1.jpg"
            title="[프로모션][굿즈] <메가박스X위글위글> 콤보 런칭!"
            period="2024.08.21 ~ 2024.10.30"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-2.jpg"
            title="메가박스 오리지널 슬라이드 No.1 <본 아이덴티티>"
            period="2024.08.20 ~ 2024.09.20"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-3.jpg"
            title="[라이브뷰잉] hololive English 2nd Concert"
            period="2024.08.25 ~ 2024.08.26"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-4.jpg"
            title="<룩백> 프리미어 상영회"
            period="2024.08.31 ~ 2024.09.01"
          />
        </div>

        {/* subnav에서 극장 눌렀을때 스크롤이 여기로 오도록하기 */}
        <a href="#theater" className="py-7 text-lg font-bold">
          극장
        </a>
        <div className="flex gap-10 overflow-auto snap-x snap-proximity mb-20">
          <EventCard
            imgsrc="/img/eventLinkImg-1.jpg"
            title="[프로모션][굿즈] <메가박스X위글위글> 콤보 런칭!"
            period="2024.08.21 ~ 2024.10.30"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-2.jpg"
            title="메가박스 오리지널 슬라이드 No.1 <본 아이덴티티>"
            period="2024.08.20 ~ 2024.09.20"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-3.jpg"
            title="[라이브뷰잉] hololive English 2nd Concert"
            period="2024.08.25 ~ 2024.08.26"
          />
          <EventCard
            imgsrc="/img/eventLinkImg-4.jpg"
            title="<룩백> 프리미어 상영회"
            period="2024.08.31 ~ 2024.09.01"
          />
        </div>
      </div>
    </>
  );
};

export default Event;
