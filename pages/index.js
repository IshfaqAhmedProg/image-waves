import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import PopularServices from "../components/PopularServices/PopularServices";
import PromoSection from "../components/PromoSection/PromoSection";
import ServicesCarousel from "../components/ServicesCarousel/ServicesCarousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>imageWAVES</title>
        <meta name="description" content="Online Image editing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
      </main>
      <footer></footer>
    </div>
  );
}
