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
            <p className="text-md italic text-teal-400 md:text-xl lg:text-3xl">{date}</p>
            <div className="mt-3">
            <h4 className="text-white text-xl font-semibold md:text-2xl lg:text-4xl">Degree</h4>
            <p className='text-white md:text-lg lg:text-2xl'>
                {degree_title}</p>
            </div>
            <div className="mt-3 items-center">
            <h4 className="text-white text-xl font-semibold md:text-2xl lg:text-4xl">Major</h4>
            <p className='text-white md:text-lg lg:text-2xl'>
                 {major}</p>
            </div>
        </div>
    )
}

export default Bachelor;