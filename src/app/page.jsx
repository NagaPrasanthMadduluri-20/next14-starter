import HeroSection from "@/components/hero/HeroSection";
import Teams from "@/components/teams/teams";
import Slider from "@/components/slider/slider"
import Cards from "@/components/cards/Cards";

const Home = () => {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto bg-[#1E1E1E] px-8 pt-[80px]">
      <HeroSection/>
      </div>
      <div className="max-w-[1200px] mx-auto bg-[#1E1E1E] px-8 pt-[80px]">
        <Teams/>
      </div>
      <div className="max-w-[1200px] mx-auto bg-[#1E1E1E] px-8 pt-[80px]">
        <Slider/>
      </div>
      <div className="max-w-[1200px] mx-auto bg-[#1E1E1E] px-8 pt-[80px]">
        <Cards/>
      </div>
    </main>
  )
};

export default Home;