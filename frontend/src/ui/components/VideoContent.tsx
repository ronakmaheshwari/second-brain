import { useState } from "react";
import ContentSideHead from "./ContentSideHead";
import FilterCard from "./FilterComponentCard";
import CreateModal from "./CreateModal";

export default function VideoSide({title}:{title:string}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full shadow-lg bg-slate-50 p-4 rounded-lg space-y-2">
            <ContentSideHead title={title} onClick={()=>{setIsModalOpen(true)}} onShareClick={()=>{}}/>
            <FilterCard filter="video"/>
            <CreateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
