import Head from "next/head";
import BestDeals from "../components/IndexComponents/BestDeals/BestDeals";
import FAQ from "../components/IndexComponents/FAQ/FAQ";
import Hero from "../components/IndexComponents/Hero/Hero";
import OrderSteps from "../components/IndexComponents/OrderSteps/OrderSteps";
import PopularServices from "../components/IndexComponents/PopularServices/PopularServices";
import PromoSection from "../components/IndexComponents/PromoSection/PromoSection";
import ServicesCarousel from "../components/IndexComponents/ServicesCarousel/ServicesCarousel";
export default function Home() {
  return (
    <div>
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
      </main>
      <footer></footer>
    </div>
  );
}
