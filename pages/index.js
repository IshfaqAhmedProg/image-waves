import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import CompareImageSlider from "../components/CompareImageSlider/CompareImageSlider";
import BeforeAfterImages from "../shared/Data/BeforeAfterImages.json";
import Divider from "../components/Divider/Divider";
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
        <Divider direction="horizontal" colorMode="light">or</Divider>
        <Divider direction="vertical" colorMode="dark">and</Divider>
        <Divider direction="horizontal"></Divider>
        <Divider direction="vertical"></Divider>
        <CompareImageSlider imageSet={BeforeAfterImages["clipping-path"]} />
      </main>
      <footer></footer>
    </div>
  );
}
