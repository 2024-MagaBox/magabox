import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import useLoginStore from "../../../stores/login";
// 다음, 이전 버튼

type propType = {
  time: number,
  num:number,
  selected: Set<string>,
  date: string,
}
const ViewingButton = ({time,num,selected,date}:propType) => {
  const navigate = useNavigate();
  const {loginId, setLoginId} = useLoginStore();
  const [userpin, setUserpin] = useState(0);
  const [bookingId, setBookingId] = useState('');

  const handlePrevPage = () => {
    navigate(-1);
  }
  const handleNextPage =  async() => {
    if(loginId){
      if(num !== 0){
        if (num === selected.size){
            await findUserPin();

            if(userpin){
              try {
                await saveReservationCheck();
                await saveReservation();
                for (const seat of Array.from(selected)) {
                  await saveReservationSeats(seat); // 각 좌석 저장
                }
                navigate("/mypage")
              } catch {
                console.log('save_error')
              }
            }
        } else {
          alert("자리 선택이 필요합니다.")
        }
      } else {
        alert("인원 선택이 필요합니다.")
      }
    } else {
      alert("로그인이 필요합니다.")
      navigate("/login")
    }
  }

  const findUserPin = async () => {
    // const result = await axios.get(`http://localhost:8080/api/findUserPin?userid=${loginId}`)
    // const userPinValue = result.data; // 유저 핀 값 가져오기
    const userPinValue = Number(localStorage.getItem('login-pin'));
    setUserpin(userPinValue);
    setBookingId(`${date}_${time}_${userPinValue}`); 
  } 
  const saveReservationCheck = async () => {
    try{
      const result = await axios.get(`http://localhost:8080/api/reservationCheck?bookingid=${bookingId}`)
      if(result.data[0].length > 0){
        console.log('zzzzzzzzz')
      } else {
        console.log('aaaaaaaaaaa')
      }
    } catch {
      console.log('check error')
    }
  }

  const saveReservation = async () => {
    try {
      await axios.post(`http://localhost:8080/api/reservationSaveBooking`, {
        booking_id: bookingId,
        time_id: time,
        user_pin: userpin,
      });
    } catch (error) {
      console.error("예약 저장 중 오류 발생:", error);
      alert("예약 저장에 실패했습니다.");
    }
  }

  const saveReservationSeatList = async () => {
          selected.forEach(async (seat) => {
            await saveReservationSeats(seat); // 각 좌석 저장
          });
  }

  const saveReservationSeats = async (e: string) => {
    try {
      const result = await axios.get(`http://localhost:8080/api/booking/${bookingId}`);
      await axios.post(`http://localhost:8080/api/reservationSaveSeat`, {
        booking_pin: result.data.bookingPin,
        seat: e,
      });
    } catch (error) {
      console.error("좌석 예약 저장 중 오류 발생:", error);
      alert("좌석 예약 저장에 실패했습니다.");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={handlePrevPage}>이전</Button>
        <Button onClick={handleNextPage}>다음</Button>
      </ButtonGroup>
    </Box>
  );
};
export default ViewingButton;