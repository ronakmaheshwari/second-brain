import { useCallback } from "react";
import CardHeader from "./CardHeader";
import { Download } from "lucide-react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { Backend_Url } from "../../config";

interface CardSchema {
    id: string; 
    title: string;
    type: "image" | "document" | "video" | "audio" | "application" | "text" | "code" | "tweet" | "link";
    link: string;
}

export default function Card({ id, title, type, link }: CardSchema) {
    const getFileName = (url: string) => url.split("/").pop();

    const DeleteItem = useCallback(async () => {
        try {
            const token = localStorage.getItem("token");
    
            await axios.delete(`${Backend_Url}/content/`, {
                data: { contentId: id }, 
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                },
            });
            
    
            toast.success("Deleted Content Successfully!", {  
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Delete error:", error || error); 
            toast.error("Couldn't delete content! Please try again.", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [id]);
    

    const renderContent = () => {
        switch (type) {
            case "image":
                return <a href={link}><img src={link}  alt={title} className="w-full h-full object-scale-down rounded-xl" /></a>;
            case "video":
                return <video src={link} controls className="w-full h-full rounded-xl" />;
            case "audio":
                return <audio src={link} controls className="w-full rounded-xl" />;
            case "document":
            case "code":
                return (
                    <a 
                        href={link} 
                        download 
                        className="w-full flex flex-col items-center justify-center h-36 bg-gray-100 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-200 transition-all p-4 shadow-inner"
                    >
                        <Download className="w-8 h-8 text-gray-600 mb-2" />
                        <span className="text-gray-700 font-semibold text-sm text-center truncate w-full px-2">
                            {getFileName(link)}
                        </span>
                    </a>
                );
            case "tweet":
                return (
                    <blockquote className="twitter-tweet">
                        <a href={link}><button className="w-32 h-10 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200">View Tweet</button></a> 
                    </blockquote>
                );
            case "link":
                return (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 underline break-words text-sm"
                    >
                        <button className="w-32 h-10 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200">View Link</button>
                    </a>
                );
            default:
                return <p className="text-gray-500 text-center">Unsupported content type</p>;
        }
    };

    return (
        <div className="shadow-md rounded-2xl w-72 h-96 bg-white p-4 flex flex-col gap-3 border border-gray-300 hover:shadow-lg transition-all relative">

            <CardHeader title={title} onClick={DeleteItem}/>
            <div className="flex-grow flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-3">
                {renderContent()}
            </div>
        </div>
    );
}
