import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props{
    image: StaticImageData;
    altText: string;
    topText: string;
    centerText: string;
    bottomText: string;
}

const Header: React.FC<Props> = ({
    image,
    altText,
    topText,
    centerText,
    bottomText
})=>{
    return(
        <div className="content-center flex">
        <div className="w-2/3 inline-block m-auto">
            <h1 className='mr-3 ml-5'>
            <div className="text-white text-xl mt-2"><p>{topText}</p></div>
            <div className="bg-teal-400 text-gray-800 rounded-2xl font-extrabold text-2xl text-center w-fit pl-3 pr-3 -ml-3 -mr-3 mt-2">{centerText}</div>
            <div className="text-white text-xl mt-2"><p>{bottomText}</p></div>
            </h1>
        </div>
        <div className="w-1/3 inline-block center m-3">
            <Image
              src = {image}
              alt = {altText}
            />
        </div>
    </div>
    );
}

export default Header;