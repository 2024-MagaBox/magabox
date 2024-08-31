import { useState } from "react";
import NumberOfSpectators from "../Molecules/NumberOfSpectators";
import SeatsChoose from "../Molecules/SeatsChoose";
import ViewingCheck from "../Molecules/ViewingCheck";
type CheckProps = {
  price: Number;
};

type hanleNum = () => void;
const Body = () => {
  const [num, setNum] = useState<number>(0);

  const plusNum: hanleNum = () => {
    setNum((prev) => prev + 1);
    num >= 2 ? setNum(2) : setNum(num + 1);
  };
  // const miunsNum = () => {
  //   setNum((prev) => prev - 1);
  //   num === 0 ? setNum(0) : setNum(num - 1);
  // };

  return (
    <div className="w-screen h-screens">
      <div
        className="w-full max-w-5xl m-auto flex gap-10"
        style={{ paddingBottom: "100px" }}
      >
        <NumberOfSpectators handlePlus={plusNum} />
      </div>
      <div className="flex justify-center items-center relative ">
        <SeatsChoose />
        <div className="flex absolute inset-y-0 right-32">
          <ViewingCheck />
        </div>
      </div>
    </div>
  );
};
export default Body;