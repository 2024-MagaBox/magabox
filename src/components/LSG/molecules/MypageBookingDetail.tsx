import axios from "axios";
import MypageTicketInfo from "./MypageTicketInfo";
import { useEffect, useState } from "react";

type MovieType = {
  reservationNO: string;
  movieID: number;
  movieNM: string;
  movieURL: string;
  theaterID: number;
  theaterNM: string;
  timeId: number;
  timeNM: string;
  person: number;
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
      const reservationData = result.data[0]; // API 응답이 배열이라고 가정

      // reservationData에서 필요한 정보를 추출합니다.
      
        const bookingInfo = reservationData[0]; // 예약 정보
        const movieInfo = reservationData[2]; // 영화 정보
        const timeInfo = reservationData[1]; // 시간 정보 

        // 상태 업데이트
        setMovies((prev) => [
          ...prev,
          {
            reservationNO: bookingInfo.bookingId,
            movieID: movieInfo.moviesId,
            movieNM: movieInfo.movies_name,
            movieURL: movieInfo.movies_imgurl,
            theaterID: movieInfo.theaterId,
            theaterNM: movieInfo.theaterName,
            timeId: bookingInfo.timeId,
            timeNM: timeInfo.time,
            person: bookingInfo.person, // 추가 필드 예시
            seats: bookingInfo.seats, // 추가 필드 예시
          }
        ]);
    
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  };
console.log(movies)
  return (
    <div>
      {/* 예매정보 박스 */}
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full p-5 border border-gray rounded flex gap-5">
          {
          movies.length > 0 ?
           movies.map((item, index) => ( 
            index == 1 ? 
            <div key={index} className="flex gap-10">
              <div className="w-40 h-56 bg-gray">
                <img className="w-full h-full object-cover" src={item.movieURL} alt={item.movieNM} />
              </div>
              <div className="flex flex-col justify-between">
                <MypageTicketInfo infoTitle="예매번호" infoContents={item.reservationNO} />
                <MypageTicketInfo infoTitle="영화명" infoContents={item.movieNM} />
                <MypageTicketInfo infoTitle="관람시간" infoContents={item.timeNM} />
              </div>
            </div>   
            : null    
          ))
        : '내용이 없습니다.'
        }
        </div>
      </div>
    </div>
  );
};

export default MypageBookingDetail;
