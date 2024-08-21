type EventCardProps = {
  imgsrc?: string;
  title?: string;
  period?: string;
};

const EventCard = ({
  imgsrc = "/img/eventLinkImg-1.jpg",
  title = "title",
  period = "2024.00.00 ~ 2024.00.00",
}: EventCardProps) => {
  return (
    <div className="w-60 snap-center rounded border border-gray flex flex-col hover:cursor-pointer">
      <img src={imgsrc} />
      <div className="flex flex-col px-3 gap-3 my-7">
        <div className="text-base font-bold">{title}</div>
        <div className="text-sm text-darkgray">{period}</div>
      </div>
    </div>
  );
};

export default EventCard;
