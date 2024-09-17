import { Link } from "react-router-dom";
import EventCard from "../atom/EventCard";

const EventCardGroup = () => {
  return (
    <div className="w-full flex gap-10 mb-20">
      <Link to={`event-contents`}>
        <EventCard
          imgsrc="/img/eventLinkImg-1.jpg"
          title="[프로모션][굿즈] <메가박스X위글위글> 콤보 런칭!"
          period="2024.08.21 ~ 2024.10.30"
        />
      </Link>
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
  );
};

export default EventCardGroup;
