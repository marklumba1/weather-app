interface CardProps {
  title: string;
  data: string;
  icon: string;
}
const Card: React.FC<CardProps> = ({ title, data, icon }) => {
  return (
    <div className=" p-5 flex justify-between sm:flex-col gap-3">
      <p className="flex items-center gap-3">
        <i className={`wi wi-${icon} text-3xl w-10 sm:w-auto text-center `} />
        {title}
      </p>
      <p className=" text-xl sm:text-2xl font-bold">{data}</p>
    </div>
  );
};
export default Card;
