import { TicketInfoProps } from "../molecules/MypageTicketInfo";

const MypageDetailTitle = ({ infoTitle }: TicketInfoProps) => {
  return <div className="font-bold">{infoTitle}</div>;
};

export default MypageDetailTitle;
