import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "../components/IndexComponents/Hero/Hero";
import PopularServices from "../components/IndexComponents/PopularServices/PopularServices";
import WaterMark from "../components/WaterMark/WaterMark";
/*import ServicesCarousel from "../components/IndexComponents/ServicesCarousel/ServicesCarousel"; 
import BestDeals from "../components/IndexComponents/BestDeals/BestDeals";
import OrderSteps from "../components/IndexComponents/OrderSteps/OrderSteps";
import FAQ from "../components/IndexComponents/FAQ/FAQ";
import Banner from "../components/IndexComponents/Banner/Banner";
import Footer from "../components/Footer/Footer";*/
/* const PopularServices = dynamic(
  () => import("../components/IndexComponents/PopularServices/PopularServices"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
); */
const PromoSection = dynamic(
  () => import("../components/IndexComponents/PromoSection/PromoSection"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
const ServicesCarousel = dynamic(
  () =>
    import("../components/IndexComponents/ServicesCarousel/ServicesCarousel"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
const BestDeals = dynamic(
  () => import("../components/IndexComponents/BestDeals/BestDeals"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
const OrderSteps = dynamic(
  () => import("../components/IndexComponents/OrderSteps/OrderSteps"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
const FAQ = dynamic(() => import("../components/IndexComponents/FAQ/FAQ"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});
const Banner = dynamic(
  () => import("../components/IndexComponents/Banner/Banner"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  loading: () => <p>Loading caused by client page transition ...</p>,
});
export default function Home() {
  return (
    <>
      <Head>
        <title>ImageWaves</title>
        <meta name="description" content="Online Image editing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Hero></Hero>
        </section>
        <section>
          <PopularServices />
        </section>
        <section>
          <PromoSection />
        </section>
        <section>
          <ServicesCarousel />
        </section>
        <section>
          <BestDeals />
        </section>
        <section>
          <OrderSteps />
        </section>
        <section>
          <FAQ />
        </section>
        <section>
          <Banner />
        </section>
        <section>
          <WaterMark />
        </section>
      </main>
      <Footer />
    </>
  );
}
