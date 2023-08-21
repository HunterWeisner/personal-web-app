import React from "react"
interface Props{
    date: string;
    employere: string;
    location: string;
    responsibilities: string;
}

const Job: React.FC<Props> = ({
    date,
    employere,
    location,
    responsibilities
})=>{
    return(
        <div>
            <p className='text-teal-500 text-md italic  md:text-xl lg:text-3xl'>{date}</p>
            <h4 className="text-xl text-white font-semibold mt-2 
                md:text-2xl lg:text-4xl lg:mt-9 md:mt-7">Company</h4>
            <p className='text-white
                md:text-lg lg:text-2xl'>{employere}</p>
            <h4 className="text-xl text-white font-semibold mt-2
                md:text-2xl lg:text-4xl lg:mt-9 md:mt-7">Location</h4>
            <p className='text-white
                md:text-lg lg:text-2xl'>{location}</p>
            <h4 className="text-xl text-white font-semibold mt-2
                md:text-2xl lg:text-4xl lg:mt-9 md:mt-7">Responsibilities</h4>
            <p className='text-white 
                md:text-lg lg:text-2xl'>{responsibilities}</p>
        </div>
    )
}
 export default Job;
 