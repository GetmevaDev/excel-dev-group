import { RichText, Typography } from "@/shared/widgets";
import Image from "next/image";
import styles from "./Overview.module.scss";
export const Overview = () => {
  return (
    <div className={styles.overview}>
      <Typography tag="h2" color="black" className={styles.title}>
        Company Overview
      </Typography>

      <section className="layout">
        <RichText
          text="Excel Group has revolutionized the iconic New York City skyline through an impressive collection of residential, office, mixed-use properties. The landmarks have not only elevated the status quo but also established new paradigms for the realm of development. 
          <br/>
          <br/>
          Our passion lies in turning blueprints into vibrant realities. We design spaces that inspire, empower, and elevate the human experience.
          "
          className="grayscale"
        />

        <Image
          width={855}
          height={520}
          className={styles.image}
          alt="overview"
          src="/images/overview.jpg"
        />
      </section>
    </div>
  );
};
