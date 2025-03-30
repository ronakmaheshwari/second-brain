import DocumentSide from "../components/DocumentSide";
import SideBar from "../components/SideBar";

export default function Documents(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <DocumentSide title="All Documents"/>
        </div>
    )
}