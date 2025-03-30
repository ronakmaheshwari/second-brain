import { useState } from "react";
import Contents from "./Contents";
import ContentSideHead from "./ContentSideHead";
import CreateModal from "./CreateModal";
import ShareModal from "./ShareModal";

export default function ContentSide({ title }: { title: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShareModalOpen, setisShareModalOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full shadow-lg bg-slate-50 p-4 rounded-lg space-y-2">
            <ContentSideHead title={title} onClick={()=>{setIsModalOpen(true)}} onShareClick={()=>{setisShareModalOpen(true)}}/>
            <Contents />
            <CreateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <ShareModal open={isShareModalOpen} onClose={()=>{setisShareModalOpen(false)}} />
        </div>
    );
}
