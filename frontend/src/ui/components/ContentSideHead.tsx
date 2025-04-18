import React from "react";
import Button from "./Button";

export default function ContentSideHead({title,onClick,onShareClick}:{title:string;onClick:(e: React.MouseEvent<HTMLElement>)=>void,onShareClick: (e: React.MouseEvent<HTMLElement>) => void}){
    return(
        <div className="flex w-full h-16 p-2 justify-between items-center gap-3 bg-slate-50">
                <h1 className="text-2xl font-bold flex-grow">{title}</h1>
                <Button 
                    variant="secondary" 
                    size="md" 
                    title="Share Content" 
                    onClick={onShareClick} 
                    startIcon={
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            viewBox="0 0 30 30" 
                            className="fill-indigo-600"
                        >
                            <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                        </svg>
                    }
                />
                <Button 
                    variant="primary" 
                    size="md" 
                    title="Add Content" 
                    onClick={onClick} 
                    startIcon={
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            viewBox="0 0 30 30" 
                            className="fill-white"
                        >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
                        </svg>
                    }
                />
            </div>
    )
}