import ContentSide from "../components/ContentSide";
import SideBar from "../components/SideBar";

export default function Dashboard(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <ContentSide title="All notes"/>
        </div>
    )
}