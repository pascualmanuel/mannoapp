import Hero from "./Hero";
import Categories from "./Categories";
import Footer from "./Footer";
import TabsComp from "./Tabs/TabsComp";
import Expertos from "./Expertos";
import Reviews from "./Reviews";
import Faqs from "./Faqs";
import Clients from "./Clients";
import WPIcon from "../Assets/whatsapp-icon.png";
import Loader from "./Loader";

function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <TabsComp />
      <Categories />
      <Clients />
      <Expertos />
      <Reviews />
      <Faqs />
      <Footer />
      <a href="https://wa.me/5491135108238" target="_blank">
        <img
          src={WPIcon}
          style={{
            position: "fixed",
            zIndex: "1000",
            bottom: "30px",
            right: "30px",
            width: "50px",
          }}
        />
      </a>
    </>
  );
}

export default Home;
