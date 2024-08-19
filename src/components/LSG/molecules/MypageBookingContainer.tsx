import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MypageBookingDetail from "./MypageBookingDetail";
import MypageNoBooking from "./MypageNoBooking";

type MypageBookingContainerProps = {
  title?: string;
  contents?: boolean;
};

const MypageBookingContainer = ({
  title = "",
  contents = false,
}: MypageBookingContainerProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-20">
      <div className="w-full flex justify-between items-end pb-3 border-black border-b">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm hover:cursor-pointer">
          더보기
          <KeyboardArrowRightRoundedIcon />
        </div>
      </div>

      {contents ? <MypageBookingDetail /> : <MypageNoBooking />}
    </div>
  );
};

export default MypageBookingContainer;
