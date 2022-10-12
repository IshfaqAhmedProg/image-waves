import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import PopularServices from "../components/PopularServices/PopularServices";

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
      </main>
      <footer></footer>
    </div>
  );
}
