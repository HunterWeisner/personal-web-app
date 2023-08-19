import React from "react";
import DropDownButton from "./dropDownButton";
import buttonFunctions from "../scripts/moreDetailsButtonScript";
import {Job} from "../interfaces/job";
import employment_history  from '../data/employment_history.json' assert {type: "json"};

interface Props{
}

const Job_experience: React.FC<Props>=({
})=>{
    const jobs = employment_history as Job[];
    var experience: Array<JSX.Element> = []; 
    let key: number = 0;
    var keyGenerator = ()=>{
        return key++;
    }

    for(var i: number = 0; i < jobs.length; i++){
        experience.push(
            <div className="flex gap-1 mt-2">
                <p className='text-white'>{jobs[i].job_title}</p>
                <DropDownButton
                    border="none"
                    color=""
                    height="1.3rem"
                    onClick={buttonFunctions.ExpandOnClick}
                    radius=""
                    width="1.3rem"
                    children = {<svg id="triangle" viewBox="0 0 100 100">
                        <polygon points="50 15, 100 100, 0 100"/></svg>}
                />
                <div className="more-details-div hidden" id={jobs[i].job_title.replace(/\s/g,'-')
                    + "-details"} aria-expanded="false">
                    <p className='text-white mt-2'>{jobs[i].date}</p>
                    <p className='text-white mt-2'>{jobs[i].employere}</p>
                    <p className='text-white mt-2'>{jobs[i].location}</p>
                    <p className='text-white mt-2'>{jobs[i].responsibilities}</p>
                    <DropDownButton
                        border="none"
                        color="white"
                        height="auto"
                        onClick={buttonFunctions.CollapseOnClick}
                        radius="100%"
                        width="200px"
                        children = "collapse details"
                    />
                </div>
            </div>
        );
    } 
    return(
        <div className="content-center m-4">
            <h3 className='text-white text-2xl'>Experience</h3>
            <ul>{experience.map(item =>
                <li key={keyGenerator()}>{item}</li>)}
            </ul>
      </div>
    )
}

export default Job_experience;