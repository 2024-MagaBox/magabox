import MoreButton from "../atom/MoreButton";
import { MypageBookingContainerProps } from "./MypageBookingContainer";

const CategoryTitle = ({ title }: MypageBookingContainerProps) => {
  return (
    <div className="w-full flex justify-between items-end pb-3 border-black border-b">
      <div className="text-lg font-bold">{title}</div>
      <MoreButton />
    </div>
  );
};

export default CategoryTitle;
