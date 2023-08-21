import React from "react";

interface Props{
    class_name?: string;
    text_decoration: string;
    text_color: string;
    border: string;
    background_color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}

const DropDownButton: React.FC<Props> = ({
    class_name,
    text_decoration,
    text_color,
    border,
    background_color,
    children,
    height,
    onClick,
    radius,
    width
}) =>{
    return(
        <button
        className={class_name}
        onClick={onClick}
        style={{
            textDecoration: text_decoration,   
            color: text_color,
            backgroundColor: background_color,
            border,
            borderRadius: radius,
            height,
            width
        }}
        >
        {children}
        </button>
    );
}

export default DropDownButton;