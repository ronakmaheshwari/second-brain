import React from "react";

interface InputSchema{
    label:string;
    value:string;
    placeholder:string;
    
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({label,onChange,value,placeholder}:InputSchema){
    return(
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" />
        </div>
    )
}