interface CardProps {
  title: string;
  data: string;
  icon: string;
}
const Card: React.FC<CardProps> = ({ title, data, icon }) => {
  return (
    <div className=" p-5 flex justify-between sm:flex-col gap-3">
      <div className="flex sm:flex-row min-w-[80px] -mx-4 sm:mx-0  flex-col items-center sm:gap-3">
        <i className={`wi wi-${icon} text-3xl w-10 sm:w-auto text-center `} />
        <p className="text-xs mt-1 sm:mt-0 sm:text-base text-center">{title}</p>
      </div>
      <p className=" text-xl sm:text-2xl font-bold">{data}</p>
    </div>
  );
};
export default Card;
