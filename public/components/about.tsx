import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props{
    section_title: string;
    section_text: string;
    first_icon: StaticImageData;
    first_url: string;
    first_alt: string;
    second_icon: StaticImageData;
    second_url: string;
    second_alt: string;
}

const About: React.FC<Props> = ({
    section_title,
    section_text,
    first_icon,
    first_url,
    first_alt,
    second_icon,
    second_url,
    second_alt
}) =>{
    return(
        <div className="">
            <div className="content-center m-4">
                <h2 className='text-white text-2xl'>{section_title}</h2>
                <p className='text-white mt-2'>{section_text}</p>
            </div>
            <div className="links-container flex gap-1 right-0">
                <a href={first_url}>
                <Image
                    src={first_icon}
                    alt={first_alt}
                />
                </a>
                <a href={second_url}>
                <Image
                    src={second_icon}
                    alt={second_alt}
                />
                </a>
            </div>
        </div>
    )
}

export default About;