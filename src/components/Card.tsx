interface CardProps {
    title: string,
    data: string,
    icon: string
}
const Card:React.FC<CardProps> = ({title, data, icon}) => {
return <div className="p-5 bg-slate-700 rounded flex justify-between ">
    <div className="">
<p className="font-semibold text-xl">{title}</p>
    <p>{data}</p>
    </div>
    
    
    <i className={`wi wi-${icon} text-5xl`} />
</div>
}
export default Card