type ButtonProps = { title?: string };

const Button = ({ title = "title" }: ButtonProps) => {
  return <div className="px-10 py-3 hover:cursor-pointer">{title}</div>;
};

export default Button;
