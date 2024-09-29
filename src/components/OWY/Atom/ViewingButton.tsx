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
}
const ViewingButton = ({time}:propType) => {
  const navigate = useNavigate();
  const {loginId, setLoginId} = useLoginStore();
  const [userpin, setUserpin] = useState(0);

  const handlePrevPage = () => {
    navigate(-1);
  }
  const handleNextPage = () => {
    if(loginId){
      findUserPin();
      if(userpin){
        saveReservation();
        navigate("/mypage")
      }
    } else {
      alert("로그인이 필요합니다.")
    }
  }

  const findUserPin = async () => {
    const result = await axios.get(`http://localhost:8080/api/findUserPin?userid=${loginId}`)
    setUserpin(result.data);
  } 
  
  const saveReservation = async () => {
    console.log(userpin)
    const result = await axios.post(`http://localhost:8080/api/reservation`,{
      booking_id:'test',
      time_id: time,
      user_pin: userpin,
    })
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