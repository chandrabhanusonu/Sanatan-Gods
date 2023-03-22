import Card from "./Card";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import { useState } from "react";
const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    function leftShifHandler(){
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function RightShifHandler() {
        if(index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index +1);
        }
    }

    function surpriseHandler() {

    }

    return(
        <div>
            <Card review = {reviews[0]}/>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold items-center justify-center">
                <button 
                onClick={leftShifHandler}
                className="cursor-pointer hover:text-violet-500"><MdKeyboardArrowLeft/></button>
                <button 
                onClick={RightShifHandler}
                className="cursor-pointer hover:text-violet-500"><MdKeyboardArrowRight/></button>
            </div>

            <div>
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;