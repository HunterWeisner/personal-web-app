import React from "react";
import DropDownButton from "./dropDownButton";
import {Job_interface} from "../interfaces/job_interface";
import Job from "./job";
import employment_history  from '../data/employment_history.json' assert {type: "json"};

interface Props{
}

const Job_experience: React.FC<Props>=({
})=>{
    let key: number = 0;
    var keyGenerator = ()=>{
        return 'job_experience' + String(key++);
    }
    const jobs = employment_history as Job_interface[];
    const experience: Array<JSX.Element> = jobs.map(job =>
        <div className="mt-4">   
            <p className='text-xl 
                font-semibold text-teal-500 md:text-2xl lg:text-4xl lg:mt-12 md:mt-8'>{job.job_title}</p>
            <Job
                date={job.date}
                employere={job.employere}
                location={job.location}
                responsibilities={job.responsibilities}
            />
        </div>
    ); 
    return(
        <div key={'job_experience-div'} className="gap-1 m-5">
            <div className="content-center ">
                <h3 className='text-white text-3xl font-bold lg:text-6xl 
                    md:text-4xl lg:mt-12'>Work Experience</h3>
                <ul className="first-of-type:-mt-4 lg:first-of-type:-mt-12 md:first-of-type:-mt-8">{experience.map(item =>
                    <li key={keyGenerator()}>{item}</li>)}
                </ul>
            </div>
      </div>
    )
}

export default Job_experience;