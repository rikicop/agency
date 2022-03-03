import Image from "next/image";
import styles from "../styles/Intro.module.css";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>Ricardo Otálora</span> <br /> PRODUCTOS
          DIGITALES
        </h1>
        <p className={styles.desc}>Desarrollador de Aplicaciones Web</p>
        <button className={styles.button}>Más</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Intro;
