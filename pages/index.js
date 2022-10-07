import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>IMAGEthetic</title>
        <meta name="description" content="Online Image editing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero></Hero>
       
      </main>
      <footer></footer>
    </div>
  );
}
