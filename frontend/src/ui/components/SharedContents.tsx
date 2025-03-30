import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import { Backend_Url } from "../../config";

interface ContentSchema {
    id: string;
    title: string;
    type: "image" | "document" | "video" | "audio" | "application" | "text" | "code" | "tweet" | "link";
    link: string;
}

export default function SharedContent({ filter }: { filter: string }) {
    const [content, setContent] = useState<ContentSchema[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null); 

    const fetchData = async () => {
        if (!filter) return;

        try {
            setLoading(true);
            setError(null);

            const token = localStorage.getItem("token");
            const response = await axios.get<{ username: string; content: ContentSchema[] }>(
                `${Backend_Url}/brain/${filter}`,
                {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                    },
                }
            );

            setUsername(response.data.username); 
            setContent(response.data.content ?? []); 
        } catch (error) {
            console.error("Error fetching content:", error);
            setError("Failed to load content. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => fetchData(), 10 * 1000);
        return () => clearInterval(interval);
    }, [filter]); 

    return (
        <div className="w-full h-full max-h-[1000px] rounded-lg bg-slate-100 flex flex-col gap-4 p-5 overflow-auto">
            {username && (
                <h2 className="text-xl font-bold text-center w-full h-16 bg-slate-100 text-gray-400">Shared by {username}</h2>
            )}
            {loading ? (
                [...Array(4)].map((_, index) => <SkeletonCard key={index} />)
            ) : error ? (
                <p className="text-red-500 text-center font-bold text-lg">{error}</p>
            ) : content.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                    {content.map((x) => (
                        <Card id={x.id} key={x.id} title={x.title} type={x.type} link={x.link} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center font-bold text-2xl">No content available</p>
            )}
        </div>
    );
}
