import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div>title</div>
      <div></div>
    </>
  );
};

export default EventContents;
