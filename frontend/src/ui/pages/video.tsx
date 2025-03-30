import SideBar from "../components/SideBar";
import VideoSide from "../components/VideoContent";

export default function Video(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <VideoSide title="All Vidoes"/>
        </div>
    )
}