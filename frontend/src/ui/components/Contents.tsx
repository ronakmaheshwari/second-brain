import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";

interface ContentSchema {
    id: string;
    title: string;
    type: "image" | "document" | "video" | "audio" | "application" | "text" | "code" | "tweet" | "link";
    link: string;
}

export default function Contents() {
    const [content, setContent] = useState<ContentSchema[]>([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get<{ response: ContentSchema[] }>(
                    "http://localhost:3000/api/v1/content/",
                    {
                        headers: {
                            Authorization: token ? `Bearer ${token}` : "",
                        },
                    }
                );

                setContent(response.data.response ?? []);
            } catch (error) {
                console.error("Error fetching content:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full max-h-[1000px] rounded-lg bg-slate-100 flex flex-wrap gap-4 p-5 overflow-auto">
            {loading ? (
                
                [...Array(4)].map((_, index) => <SkeletonCard key={index} />)
            ) : content.length > 0 ? (
                content.map((x) => (
                    <Card id={x.id} key={x.id} title={x.title} type={x.type} link={x.link} />
                ))
            ) : (
                <p className="text-gray-500 text-center font-bold text-2xl">No content available</p>
            )}
        </div>
    );
}
