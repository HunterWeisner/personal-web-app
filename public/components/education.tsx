import React from "react";
import Bachelor from "./bachelor";
import bachelors  from '../data/bachelors.json' assert {type: "json"};
import { bachelor } from "../interfaces/bachelor";
import exp from "constants";

interface Props{}

const Education: React.FC<Props> = ({

})=>{
    const bacholers = bachelors as bachelor[];
    let bachelors_jsx: Array<JSX.Element> = [];
    let key: number = 0;
    let keyGenerator = ()=>{return key++;}
    for(var i: number = 0; i < bachelors.length; i++){
        bachelors_jsx.push(<Bachelor
                            degree_title={bachelors[i].degree_title}
                            major={bachelors[i].Major}
                            university={bachelors[i].University}/>)
    }
    return(
        <div className="content-center m-4">
            <h3 className='text-white text-2xl'>Education</h3>
            <ul>
                {bachelors_jsx.map(item =><li key={keyGenerator()}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Education;