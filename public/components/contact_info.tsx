import React from "react";

interface Props{
    phone: string;
    email: string;
    resume_url: string;
    dark?: boolean;
}

const Contact_info: React.FC<Props>=({
    phone,
    email,
    resume_url,
    dark
})=>{
    let classNames: string = "";
    if(dark){
        classNames = "flex gap-2 text-black m-auto w-fit text-xl flex-wrap md:text-2xl lg:text-3xl h-fit";
    }else{
        classNames = "flex gap-2 text-white m-auto w-fit mt-6 text-xl flex-wrap md:text-2xl lg:text-3xl h-fit";
    }
    return(
        <section>
            <div className={classNames}>
                <div><a href={email} className="underline">hunterweisner@gmail.com, </a></div>
                <div><p>{phone}, </p></div>
                <div><a href={resume_url} target="_blank" className="underline">View Resume</a></div>
            </div>
        </section>
    )
}

export default Contact_info;