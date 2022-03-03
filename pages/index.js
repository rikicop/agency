import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { data } from "../data";
import styles from "../styles/Home.module.css";

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricardo Otálora</title>
        <meta
          name="description"
          content="Porfolio de React NextJS creado por Ricardo Otálora"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
