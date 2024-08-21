import CategoryTitle from "./CategoryTitle";
import MypageBookingDetail from "./MypageBookingDetail";
import MypageNoBooking from "./MypageNoBooking";

export type MypageBookingContainerProps = {
  title?: string;
  contents?: boolean;
};

const MypageBookingContainer = ({
  title = "",
  contents = false,
}: MypageBookingContainerProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-20">
      {/* 나의 ~~ 내역 */}
      <CategoryTitle title={title} />

      {/* 내역 없음 or 내역 보여줌 */}
      {contents ? <MypageBookingDetail /> : <MypageNoBooking />}
    </div>
  );
};

export default MypageBookingContainer;
