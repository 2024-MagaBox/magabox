import { useState } from "react";
import Seats from "./Seats";

const rows = 5;
const cols = 5;

const Theater = () => {
  const [selectedSeats, setSelectedSeats] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );

  const toggleSeat = (row: number, col: number) => {
    const newSelectedSeats = [...selectedSeats];
    newSelectedSeats[row][col] = !newSelectedSeats[row][col];
    setSelectedSeats(newSelectedSeats);
  };

  return <></>;
};

// export default Theater;
// {selectedSeats.map((row, rowIndex)=>{row.map({Seats},colIndex =>key={colIndex}
//     isSelected={isSelected}onClick={() => toggleSeat(rowIndex, colIndex)})

// })}
