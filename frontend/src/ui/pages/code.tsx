import CodeSide from "../components/CodeContent";
import SideBar from "../components/SideBar";

export default function Code(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <CodeSide title="All Codes"/>
        </div>
    )
}