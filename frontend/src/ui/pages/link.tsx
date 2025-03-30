import LinkSide from "../components/LinkContent";
import SideBar from "../components/SideBar";

export default function Links(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <LinkSide title="All Links"/>
        </div>
    )
}