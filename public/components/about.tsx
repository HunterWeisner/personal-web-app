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
        <section>
            <section className="diagonal-section pt-1 pb-1 max-w-5xl m-auto">
                <div className="bg-transparent m-6">
                    <div className="content-center">
                        <h2 className=' text-black text-3xl font-bold lg:text-6xl
                            md:text-4xl'>{section_title}</h2>
                        <p className=' text-black mt-2 lg:text-3xl md:text-2xl '>{section_text}</p>
                    </div>
                    
                    <div className="links-container flex gap-3 w-fit mt-2 ml-auto mr-5">
                        <a href={first_url} className="w-fit">
                            <Image
                                src={first_icon}
                                alt={first_alt}
                                className="link-icon m-0"
                            />
                        </a>
                        <a href={second_url} className="w-fit">
                            <Image
                                src={second_icon}
                                alt={second_alt}
                                className="link-icon rounded-md"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </section>
        
    )
}

export default About;