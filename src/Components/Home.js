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
      <Clients />
      <TabsComp />
      <Categories />
      <Expertos />
      <Reviews />
      <Faqs />
      <Footer />
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100vw",
            bottom: "0px",
            maxWidth: "2000px",
            zIndex: "1000",
          }}
        >
          <a
            href="https://wa.me/5491135108238?text=Hola,%20los%20contacto%20desde%20la%20web"
            target="_blank"
          >
            <img
              src={WPIcon}
              style={{
                position: "absolute",
                zIndex: "1000",
                bottom: "30px",
                right: "30px",
                width: "50px",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
