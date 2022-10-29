import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "../components/IndexComponents/Hero/Hero";
/* import Banner from "../components/IndexComponents/Banner/Banner";
import BestDeals from "../components/IndexComponents/BestDeals/BestDeals";
import FAQ from "../components/IndexComponents/FAQ/FAQ";
 import OrderSteps from "../components/IndexComponents/OrderSteps/OrderSteps";
import PopularServices from "../components/IndexComponents/PopularServices/PopularServices";
import PromoSection from "../components/IndexComponents/PromoSection/PromoSection";
import ServicesCarousel from "../components/IndexComponents/ServicesCarousel/ServicesCarousel"; */
const PopularServices = dynamic(() =>
  import("../components/IndexComponents/PopularServices/PopularServices")
);
const PromoSection = dynamic(() =>
  import("../components/IndexComponents/PromoSection/PromoSection")
);
const ServicesCarousel = dynamic(() =>
  import("../components/IndexComponents/ServicesCarousel/ServicesCarousel")
);
const BestDeals = dynamic(() =>
  import("../components/IndexComponents/BestDeals/BestDeals")
);
const OrderSteps = dynamic(() =>
  import("../components/IndexComponents/OrderSteps/OrderSteps")
);
const FAQ = dynamic(() => import("../components/IndexComponents/FAQ/FAQ"));
const Banner = dynamic(() =>
  import("../components/IndexComponents/Banner/Banner")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));
export default function Home() {
  //TODO fix code Splitting
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
      </main>
      <Footer />
    </>
  );
}
