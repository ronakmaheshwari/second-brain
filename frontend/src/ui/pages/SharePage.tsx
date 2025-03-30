import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import SharedSide from "../components/SharedPage";

export default function SharePage() {
    const { shareLink } = useParams(); // Fetch shareLink from the URL

    return (
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            {shareLink ? (
                <SharedSide title="Shared Page" filter={shareLink} />
            ) : (
                <p className="text-center text-red-500 font-bold">Invalid share link</p>
            )}
        </div>
    );
}
