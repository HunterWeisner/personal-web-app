import exp from "constants";
import React from "react";

interface Props{
    degree_title: string;
    major: string;
    university: string;
}

const Bachelor: React.FC<Props>=({
    degree_title,
    major,
    university
})=>{
    return(
        <div>
            <p className='text-white mt-2'>{degree_title}</p>
            <p className='text-white mt-2'>{major}</p>
            <p className='text-white mt-2'>{university}</p>
        </div>
    )
}

export default Bachelor;