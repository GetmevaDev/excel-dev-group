import { RichText, Typography } from "@/shared/widgets";
import Image from "next/image";
import styles from "./Overview.module.scss";
import classNames from "classnames";

export const Overview = ({ direction, title, text, image }) => {
  return (
    <>
      {direction === "row" && (
        <div className={styles.overview}>
          <div className="layout">
            <div className={styles.row}>
              <div className={styles.row_overview}>
                <Typography
                  tag="h2"
                  color="black"
                  className={classNames(styles.title, styles.title_row)}
                >
                  {title}
                </Typography>
                <RichText
                  text={text}
                  className={classNames("grayscale", styles.text_row)}
                />
              </div>

              <section>
                <Image
                  width={630}
                  height={420}
                  className={styles.image_row}
                  alt="overview"
                  src={image}
                />
              </section>
            </div>
          </div>
        </div>
      )}

      {direction === "column" && (
        <div className={classNames(styles.overview, styles.column)}>
          <div>
            <Typography tag="h2" color="black" className={styles.title}>
              {title}
            </Typography>
          </div>

          <section className="layout">
            <RichText text={text} className="grayscale" />
            <Image
              width={855}
              height={520}
              className={styles.image}
              alt="overview"
              src={image}
            />
          </section>
        </div>
      )}
    </>
  );
};
