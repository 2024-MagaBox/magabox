import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
// - 0 + 버튼

const PersonnelButton = () => {
  const [num, setNum] = useState(0);
  const plusNum = () => {
    setNum(num + 1);
    num >= 2 ? setNum(2) : setNum(num + 1);
  };
  const miunsNum = () => {
    setNum(num - 1);
    num === 0 ? setNum(0) : setNum(num - 1);
  };

  return (
    <div>
      <div className="w-fit border-2">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={miunsNum}>
            -
          </Button>
          <span className="flex justify-center items-center">{num}</span>
          <Button variant="outlined" onClick={plusNum}>
            +
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default PersonnelButton;
