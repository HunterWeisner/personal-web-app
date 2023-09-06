import React from "react";

interface Props{
    degree_title: string;
    major: string;
    university: string;
    date: string;
}

const Bachelor: React.FC<Props>=({
    degree_title,
    major,
    university,
    date
})=>{
    return(
        <div>
            <h3 className="text-xl text-teal-500 font-bold md:text-2xl lg:text-4xl">{university}</h3>
            <p className="text-md italic text-teal-500 md:text-xl lg:text-3xl">{date}</p>
            <div className="mt-3">
            <h4 className="text-white text-xl font-semibold md:text-2xl lg:text-4xl lg:mt-9 md:mt-7">Degree</h4>
            <p className='text-white md:text-lg lg:text-2xl lg:mt-3'>
                {degree_title}</p>
            </div>
            <div className="mt-3 items-center">
            <h4 className="text-white text-xl font-semibold md:text-2xl lg:text-4xl lg:mt-9 md:mt-7">Major</h4>
            <p className='text-white md:text-lg lg:text-2xl lg:mt-3'>
                 {major}</p>
            </div>
        </div>
    )
}

export default Bachelor;