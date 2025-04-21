import { List } from "lucide-react"
import Video from "../video"
import HeroSection from "./HeroSection"
import HeroSection2 from "./HeroSection2"
import Navbar from "./Navbar"
import OverlapCard from "./OverlapCard"

import Footer from "./Footer"
import SignUp from "./SignUp"

function Land() {


  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <HeroSection2 />
        <OverlapCard />
        <Video/>
        <List/>
        <SignUp />
        <Footer />
      </main>
    </>
  )
}

export default Land
