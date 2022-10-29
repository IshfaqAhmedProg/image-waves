import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
/* import Banner from "../components/IndexComponents/Banner/Banner";
import BestDeals from "../components/IndexComponents/BestDeals/BestDeals";
import FAQ from "../components/IndexComponents/FAQ/FAQ";
 import OrderSteps from "../components/IndexComponents/OrderSteps/OrderSteps";
import PopularServices from "../components/IndexComponents/PopularServices/PopularServices";
import PromoSection from "../components/IndexComponents/PromoSection/PromoSection";
import ServicesCarousel from "../components/IndexComponents/ServicesCarousel/ServicesCarousel"; */
const Hero = dynamic(() => import("../components/IndexComponents/Hero/Hero"));
const PopularServices = dynamic(
  () => import("../components/IndexComponents/PopularServices/PopularServices"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);
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
