import BannerSlider from "../modules/BannerSlider/BannerSlider";
import SevenController from "@/modules/SevenController";
import IncreadiblesSection from "../modules/IncreadiblesSection";
import Categories from "@/components/modules/Categories";


function HomePage() {
  return (
    <>
      <BannerSlider/>
      <SevenController />
      <IncreadiblesSection />
      <Categories />
    </>
  );
}

export default HomePage;
