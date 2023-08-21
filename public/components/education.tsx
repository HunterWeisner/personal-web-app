import React from "react";
import Bachelor from "./bachelor";
import bachelors  from '../data/bachelors.json' assert {type: "json"};
import { Bachelor_interface } from "../interfaces/bachelor_interface";

interface Props{}

const Education: React.FC<Props> = ({

})=>{
    const bacholers = bachelors as Bachelor_interface[];
   
    let key: number = 0;
    let keyGenerator = ()=>{return 'education'+ String(key++);}
    const bachelors_jsx: Array<JSX.Element> = bachelors.map(bachelor=>
        <Bachelor
            degree_title={bachelor.degree_title}
            major={bachelor.Major}
            university={bachelor.University}
            date={bachelor.date}/>
    );
    return(
        <section>

            <div key={'education-div'} className="content-center 
                    m-6 bg-gray-900 rounded-sm">
                <h3 className='text-white text-3xl font-bold lg:text-6xl 
                    md:text-4xl'>Education</h3>
                <ul>
                    {bachelors_jsx.map(item =>
                        <li key={keyGenerator()}>{item}</li>)}
                </ul>
            </div>
                    
        </section>
    )
}

export default Education;