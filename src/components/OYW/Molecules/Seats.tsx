type SeatsProps = {
  isSelected: boolean;
  click: () => void;
};

const Seats = ({ isSelected, click }: SeatsProps) => {
  return (
    <div
      onClick={click}
      className={
        "w-10 h-10 m-2 flex items-center justify-center cursor-pointer"
      }
    >
      {isSelected ? "bg-blue-500" : "bg-gray-300"} :{isSelected ? "🎟️" : "💺"}
    </div>
  );
};

export default Seats;
