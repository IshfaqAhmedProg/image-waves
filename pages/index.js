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
import Footer from "../components/Footer/Footer";

export default function Home() {
  const PopularServices = dynamic(
    () =>
      import("../components/IndexComponents/PopularServices/PopularServices"),
    { ssr: false }
  );
  const PromoSection = dynamic(
    () => import("../components/IndexComponents/PromoSection/PromoSection"),
    { ssr: false }
  );
  const ServicesCarousel = dynamic(
    () =>
      import("../components/IndexComponents/ServicesCarousel/ServicesCarousel"),
    { ssr: false }
  );
  const BestDeals = dynamic(
    () => import("../components/IndexComponents/BestDeals/BestDeals"),
    { ssr: false }
  );
  const OrderSteps = dynamic(
    () => import("../components/IndexComponents/OrderSteps/OrderSteps"),
    { ssr: false }
  );
  const FAQ = dynamic(() => import("../components/IndexComponents/FAQ/FAQ"), {
    ssr: false,
  });
  const Banner = dynamic(
    () => import("../components/IndexComponents/Banner/Banner"),
    { ssr: false }
  );
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
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <PopularServices />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <PromoSection />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <ServicesCarousel />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <BestDeals />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OrderSteps />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <FAQ />
          </section>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <Banner />
          </section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
