import React from "react";
import { Flex_Container_item } from "../interfaces/flex_container_item_interface";

interface Props{
    children: Flex_Container_item[];
}

const Flex_container: React.FC<Props> = ({
    children
})=>{
    let key: number = 0;
    var keyGenerator = ()=>{
        return 'flex_container' + String(key++);
    }

    return(
        <div className="flex m-auto gap-1 max-w-5xl" >
            <ul>
                {children.map(item =>
                    <li key={item.id}>{item.child}</li>)}
            </ul>
        </div>
    )
}
export default Flex_container;