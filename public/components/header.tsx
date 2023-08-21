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
        <div className="m-auto mb-12 max-w-5xl">
            <div className="float-none">
                <Image
                src = {image}
                alt = {altText}
                className="rounded-full border-teal-400 border-solid border-2
                    m-auto max-width headshot self-center mt-4 md:max-w-lg lg:mt-12 md:mt-8"
                priority
                />
            </div>
            <div className="m-auto text-center mt-4">
                <h1 className='m-auto'>
                    <div className="text-white text-3xl mt-2 lg:text-7xl md:text-5xl lg:mt-12 md:mt-8"><p>{topText}</p></div>
                    <div className="bg-teal-400 text-gray-900 rounded-2xl font-extrabold 
                        text-4xl text-center m-auto w-fit pl-3 pr-3 mt-2 lg:pl-6 lg:pr-6 lg:text-8xl lg:rounded-3xl
                        md:text-6xl lg:mt-9 md:mt-5">{centerText}</div>
                    <div className="text-white text-3xl mt-2 lg:text-7xl md:text-5xl lg:mt-9 md:mt-5"><p>{bottomText}</p></div>
                </h1>
            </div>
            
     </div>
    );
}

export default Header;