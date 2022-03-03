import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">PORTAFOLIO</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DESARROLLO</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCCIÓN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">FOTOGRAFÍAS</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACTO</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
