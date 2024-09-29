import axios from "axios";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import HorizontalLine from "../components/LSG/atom/HorizontalLine";

const EventContents = () => {
  const { eventContentsId } = useParams(); // path의 :params명과 동일
  const [eventContent, setEventContent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/event/${eventContentsId}`); // axios에서 활용
      setEventContent(request.data);
    };
    fetchData();
  }, [eventContentsId]);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        <div className="text-xl">{title}</div>
        <div className="text-base">{`기간 | ${begin} ~ ${end}`}</div>
        <HorizontalLine />
        <img src={content} className="mt-3" />
      </div>
    </>
  );
};

export default EventContents;