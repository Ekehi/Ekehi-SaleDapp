import Menu from "./homepageComponents/menu.js";
import HomeSection from "./homepageComponents/home.js";
import Section2 from "./homepageComponents/section2.js";
import Section3 from "./homepageComponents/whitepaper.js";
import Section4 from "./homepageComponents/sales.js";
import Ecosystem from "./homepageComponents/ecosystem.js";
import Tokenomics from "./homepageComponents/tokenomics.js";
import Roadmap from "./homepageComponents/roadmap.js";
import Footer from "./homepageComponents/footer.js";
import Airdrop from "./homepageComponents/airdrop.js";

export default function Home()
{
  return (
    <div className="v_dark w-fit ">
      <Menu />
      <main  className="w-fit">
        <HomeSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Airdrop />
        <Ecosystem />     
        <Tokenomics />
        <Roadmap />
        <Footer />
      </main>
    </div>
  )
}
