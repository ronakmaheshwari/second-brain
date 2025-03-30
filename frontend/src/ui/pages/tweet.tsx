import SideBar from "../components/SideBar";
import TweetSide from "../components/TweetContent";

export default function Tweets(){
    return(
        <div className="flex w-screen h-screen overflow-hidden p-5 space-x-5">
            <SideBar />
            <TweetSide title="Tweets"/>
        </div>
    )
}