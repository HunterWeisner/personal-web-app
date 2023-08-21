'use client';
import Job_experience from "../components/job_experience";
import Education from "../components/education";
import Flex_Container from "../components/flex_containters";
import { Flex_Container_item } from "../interfaces/flex_container_item_interface";
import Job from "../components/job";

export default function More_information(){
    const children: Flex_Container_item[] = [
      {
        id: "education",
        child: <Education/>
      },
      {
        id: "job_experience",
        child: <Job_experience/>
      }
    ];
    return(
      <div>
        
          <Flex_Container
            children={children}
          />
    
      </div>
    )
}