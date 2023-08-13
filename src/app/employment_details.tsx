
export default function Employment_details(job_title: string, date: string, employere: string, location: string, responsibilites: string){
    return(
        <div>
            <p className='text-white mt-2'>{job_title}</p>
            <button className="bg-teal-400 text-gray-800 rounded-2xl font-extrabold  text-center w-fit pl-3 pr-3 mt-2">Show Employment Details</button>
            <div>
                <p className='text-white mt-2'>{date}</p>
                <p className='text-white mt-2'>{employere}</p>
                <p className='text-white mt-2'>{location}</p>
                <p className='text-white mt-2'>{responsibilites}</p>
                <button className="bg-teal-400 text-gray-800 rounded-2xl font-extrabold  text-center w-fit pl-3 pr-3 mt-2">Hide Details</button>
            </div>
        </div>
    )
}