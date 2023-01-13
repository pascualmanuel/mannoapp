import Hero from "./Hero";
import Categories from "./Categories";
import Footer from "./Footer";
import TabsComp from "./Tabs/TabsComp";
import Expertos from "./Expertos";
import Reviews from "./Reviews";
import Faqs from "./Faqs";

function Home() {
  return (
    <>
      <Hero />
      <TabsComp />
      <Categories />
      <Expertos />
      <Reviews />
      <Faqs />
      <Footer />
    </>
  );
}

export default Home;
