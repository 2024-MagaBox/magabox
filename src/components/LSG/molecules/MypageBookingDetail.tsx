import axios from "axios";
import MypageTicketInfo from "./MypageTicketInfo";
import { useEffect, useState } from "react";

type MovieType = {
  BookingID: string;
  movieID: number;
  movieNM: string;
  movieURL: string;
  theaterID: number;
  theaterNM: string;
  timeId: number;
  timeNM: string;
  hall: string;
  seats: string;
};

const MypageBookingDetail = () => {
  const userPin = localStorage.getItem("login-pin");
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getReserve_movie();
  }, []);

  const getReserve_movie = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/bookingMovie?userpin=${userPin}`);
console.log(result.data)
      // result.data가 배열이라면 setMovies로 상태를 한 번에 설정
      const movieData = result.data.map((item: any) => ({
        BookingID: item.bookingId,
        movieID: item.moviesId,
        movieNM: item.moviesName,
        movieURL: item.moviesImgurl,
        theaterID: item.theatersId,
        theaterNM: item.theatersName,
        timeId: item.timesId,
        timeNM: item.time,
        hall: item.hall,
        seats: item.seats,
      }));

      setMovies(movieData); // 상태를 한 번에 업데이트

    
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  };

  return (
    <div>
      {/* 예매정보 박스 */}
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full p-5 border border-gray rounded">
          {
          movies.length > 0 ?
           movies.map((item, index) => ( 
            <div key={index} className="flex gap-10 py-5">
              <div className="w-40 h-56 bg-gray">
                <img className="w-full h-full object-cover" src={item.movieURL} alt={item.movieNM} />
              </div>
              <div className="flex flex-col justify-between">
                <MypageTicketInfo infoTitle="예매번호" infoContents={item.BookingID} />
                <MypageTicketInfo infoTitle="영화명" infoContents={item.movieNM} />
                <MypageTicketInfo infoTitle="관람시간" infoContents={item.timeNM} />
                <MypageTicketInfo infoTitle="영화관" infoContents={item.theaterNM} />
                <MypageTicketInfo infoTitle="관람관" infoContents={item.hall} />
                <MypageTicketInfo infoTitle="좌석" infoContents={item.seats} />
              </div>
            </div>     
          ))
        : '내용이 없습니다.'
        }
        </div>
      </div>
    </div>
  );
};

export default MypageBookingDetail;
