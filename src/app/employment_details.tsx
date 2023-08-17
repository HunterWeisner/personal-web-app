'use client';
import DropDownButton from "./dropDownButton";
import buttonFunctions from "../../public/scripts/moreDetailsButtonScript";
export default function Employment_details(job_title: string, date: string, employere: string, location: string, responsibilites: string){
    return(
        <div>
            <p className='text-white mt-2'>{job_title}</p>
            <DropDownButton
                border="none"
                color="white"
                height="200px"
                onClick={buttonFunctions.ExpandOnClick}
                radius="100%"
                width="200px"
                children = "expand detials"
            />
            <div className="more-details-div hidden" id={job_title.replace(/\s/g,'-') + "-details"} aria-expanded="false">
                <p className='text-white mt-2'>{date}</p>
                <p className='text-white mt-2'>{employere}</p>
                <p className='text-white mt-2'>{location}</p>
                <p className='text-white mt-2'>{responsibilites}</p>
                <DropDownButton
                    border="none"
                    color="white"
                    height="200px"
                    onClick={buttonFunctions.CollapseOnClick}
                    radius="100%"
                    width="200px"
                    children = "collapse details"
                />
            </div>
        </div>
    )
}