import Image from 'next/image'
import {Job} from "./types/job";
import Employment_details from './employment_details';
import employment_history  from './employment_history.json' assert {type: "json"};
const jobs = employment_history as Job[];
export default function AboutSection() {
  return (
    <div className="">
      <div className="content-center m-4">
          <h2 className='text-white text-2xl'>About Me</h2>
          <p className='text-white mt-2'>Hi there! I'm Hunter Weisner, an up-and-coming Developer thats passionate about building sustainable, acessible, and 
            readable software. Recently my focus has been on web development, but other development and engineering oppertunities are always welcome. As a Developer
            my skills are focused around understanding effective project management and writting maintainable code which are both great tools to have in any project. 
            </p>
      </div>
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
      </div>
      <div className="content-center m-4">
          <h3 className='text-white text-2xl'>Add Somthing here</h3>
          <p className='text-white mt-2'></p>
      </div>
      <div className="content-center m-4">
          <h3 className='text-white text-2xl'>Links</h3>
          <p className='text-white mt-2'></p>
      </div>
    </div>
  )
}
