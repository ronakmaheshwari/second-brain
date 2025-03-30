import { useState, useEffect } from "react";
import ContentSideHead from "./ContentSideHead";
import CreateModal from "./CreateModal";
import ShareModal from "./ShareModal";
import SharedContent from "./SharedContents";

export default function SharedSide({ title, filter }: { title: string; filter: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [validFilter, setValidFilter] = useState(false);

    useEffect(() => {
        if (filter) setValidFilter(true);
    }, [filter]);

    return (
        <div className="flex flex-col w-full h-full shadow-lg bg-slate-50 p-4 rounded-lg space-y-2">
            <ContentSideHead 
                title={title} 
                onClick={() => setIsModalOpen(true)} 
                onShareClick={() => setIsShareModalOpen(true)} 
            />
            {validFilter ? (
                <SharedContent filter={filter} />
            ) : (
                <p className="text-red-500 font-semibold text-center">Invalid or missing share link</p>
            )}
            <CreateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ShareModal open={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
        </div>
    );
}
