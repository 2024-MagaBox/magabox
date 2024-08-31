import PersonnelButton from "../Atoms/PersonnelButton";
// 관람인원선택
const NumberOfSpectators = () => {
  return (
    <div className="w-full">
      <div className="flex ustify-center items-center gap-3">
        성인
        <PersonnelButton />
        청소년
        <PersonnelButton />
        경로
        <PersonnelButton />
        우대 <PersonnelButton />
      </div>
    </div>
  );
};
export default NumberOfSpectators;
