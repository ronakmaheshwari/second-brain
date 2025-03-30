import AudioSide from "../components/AudioContent";
import SideBar from "../components/SideBar";

export default function AudioPage(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <AudioSide title="All Audios"/>
        </div>
    )
}