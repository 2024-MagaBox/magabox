import MypageTicketInfo from "./MypageTicketInfo";

const MypageBookingDetail = () => {
  return (
    <div>
      {/* 예매정보 박스 */}
      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-full p-5 border border-gray rounded flex gap-5">
          {/* 좌측 포스터 */}
          <div className="w-40 h-56 bg-gray">
            <img src="" alt="" />
          </div>

          {/* 우측 예매정보 */}
          <div className="flex flex-col justify-between">
            <MypageTicketInfo infoTitle="예매번호" infoContents="000-000" />
            <MypageTicketInfo infoTitle="영화명" infoContents="천박사" />
            <MypageTicketInfo infoTitle="극장/상영관" infoContents="송도/3관" />
            <MypageTicketInfo
              infoTitle="관람일시"
              infoContents="2023.10.02 (월) 19:00 (6회차)"
            />
            <MypageTicketInfo infoTitle="관람인원" infoContents="성인 1명" />
            <MypageTicketInfo infoTitle="관람좌석" infoContents="F열 10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageBookingDetail;
