import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto ">
                <img 
                className="rounded-full aspect-square w-[140px] h-[140px] z-[25]"
                src={review.image}/>
                <div className="w-[140px] h-[140px] bg-orange-400 rounded-full absolute top-[-6px] z-[-20] left-[10px] object-fit"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>

            <div className="text-center mt-7">
                <p className=" uppercase opacity-80 text-sm text-violet-300">{review.job}</p>
            </div>
            
            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteRight/>
            </div>

            
        </div>
    )
}

export default Card;