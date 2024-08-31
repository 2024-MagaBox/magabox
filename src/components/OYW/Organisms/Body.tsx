import NumberOfSpectators from "../Molecules/NumberOfSpectators";
import ViewingCheck from "../Molecules/ViewingCheck";

const Body = () => {
  return (
    <div className="w-screen h-screens">
      <div
        className="w-full max-w-5xl m-auto flex gap-10"
        style={{ paddingBottom: "100px" }}
      >
        <NumberOfSpectators />
      </div>
      <div className="w-full max-w-screen-xl m-auto flex flex-row-reverse">
        <ViewingCheck />
      </div>
    </div>
  );
};
export default Body;
