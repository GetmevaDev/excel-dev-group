import { Footer } from "./footer/footer";
import { Header } from "./header/header";

import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <section className={styles.layout}>
      <Header />

      <main>{children}</main>

      <Footer />
    </section>
  );
};
