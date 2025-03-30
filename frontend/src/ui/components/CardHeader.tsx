import React from "react";
import ContentIcon from "./ContentIcon";
import ContentShare from "./ContentShare";
import ContentDelete from "./DeleteIcon";

interface CardHeaderSchema{
    title:string;
    onClick:(e:React.MouseEvent<HTMLElement>)=>void;
}

export default function CardHeader({title,onClick}:CardHeaderSchema){
    return(
         <div className="w-full flex justify-between items-center">
                      
                        <div className="flex items-center gap-2">
                            <ContentIcon />
                            <h4 className="font-semibold text-base text-black">{title}</h4>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <ContentShare />
                            <button className="" onClick={onClick}>
                                <ContentDelete />
                            </button>
                        </div>
        </div>
    )
}