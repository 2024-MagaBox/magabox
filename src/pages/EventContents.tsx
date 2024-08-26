import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HorizontalLine from "../components/LSG/atom/HorizontalLine";

const EventContents = () => {
  // const { eventContentsId } = useParams(); // path의 :params명과 동일
  // const [eventContent, setEventContent] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const request = await axios.get(`/event/${eventContentsId}`); // axios에서 활용
  //     setEventContent(request.data);
  //   };
  //   fetchData();
  // }, [eventContentsId]);

  const title = `[프로모션][굿즈] <메가박스X위글위글> 콤보 런칭!`;
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        <div className="text-xl">{title}</div>
        <div className="text-base">기간 | 2024.08.21 ~ 2024.10.30</div>
        <HorizontalLine />
        <img src="/img/eventWiggleDetailPage.jpg" className="mt-3" />
      </div>
    </>
  );
};

export default EventContents;
