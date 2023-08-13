import {Job} from "./types/job";
import Employment_details from './employment_details';
import employment_history  from './employment_history.json' assert {type: "json"};

export default function More_information(){
    const jobs = employment_history as Job[];
    var experience: Array<JSX.Element> = []; 

    for(var i: number = 0; i < jobs.length; i++){
        experience.push(Employment_details(jobs[i].job_title, jobs[i].date, jobs[i].employere, jobs[i].location, jobs[i].responsibilities));
    }   
    return(
    <div>
        <div className="content-center m-4">
          <h3 className='text-white text-2xl'>Education</h3>
          <div>
            <p className='text-white mt-2'>Bachelor of Science in Computer and Information Science</p>
            <p className='text-white mt-2'>Major: Software Development</p>
            <p className='text-white mt-2'>ECPI University</p>
          </div>
      </div>
      <div className="content-center m-4">
          <h3 className='text-white text-2xl'>Experience</h3>
          {experience}
      </div>
      <div className="content-center m-4">
          <h3 className='text-white text-2xl'>Links</h3>
          <p className='text-white mt-2'></p>
      </div>
    </div>
    )
}