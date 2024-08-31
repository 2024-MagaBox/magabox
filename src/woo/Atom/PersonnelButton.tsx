import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
// - 0 + 버튼

const PersonnelButton = ({ handlePlus }) => {
  return (
    <div>
      <div className="w-fit border-2">
        <Stack spacing={2} direction="row">
          {/* <Button variant="outlined" onClick={miunsNum}> */}
          {/* - */}
          {/* </Button> */}

          {/* <span className="flex justify-center items-center">{num}</span> */}

          <Button variant="outlined" onClick={handlePlus}>
            +
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default PersonnelButton;