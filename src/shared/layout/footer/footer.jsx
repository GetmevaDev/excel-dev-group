import styles from "./footer.module.scss";
import classNames from "classnames";
import Image from "next/image";

const nav = [
  { id: 1, text: "Home" },
  { id: 2, text: "Portfolio" },
  { id: 3, text: "Realty" },
  { id: 4, text: "Films" },
  { id: 5, text: "News" },
  { id: 6, text: "Management" },
  { id: 7, text: "Contacts" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames("layout", styles.footer_inner)}>
        <div className={styles.left}>
          <Image
            src="/images/logo-white.svg"
            width={220}
            height={92}
            alt="footer logo"
          />
          <div className={styles.copyright}>© 2023, all rights reserved</div>
        </div>

        <div className={styles.right}>
          <ul className={styles.list}>
            {nav?.map((item) => (
              <li key={item.id} className={styles.item}>
                <a href="" className={styles.link}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.locations}>
            <div className={styles.link}>Property Locations</div>
            <div className={styles.border} />
            <ul>
              <li className={styles.text}>31st Drive, Astoria, New York</li>
              <li className={styles.text}>Lafayette Avenue, Brooklyn</li>
              <li className={styles.text}>East 33rd Street, New York</li>
              <li className={styles.text}>West 54th Street, New York</li>
              <li className={styles.text}>522 State Street, Brooklyn</li>
            </ul>
          </div>

          <div className={styles.contacts}>
            <div className={styles.link}>Contacts</div>
            <div className={styles.border} />

            <address className={styles.contacts_inner}>
              <div className={styles.contact}>
                <Image src="/images/map.svg" width={18} height={18} alt="map" />
                <li className={styles.text}>
                  116-55 Queens Blvd #207, Queens, NY 11375
                </li>
              </div>

              <div className={styles.contact}>
                <Image
                  src="/images/phone.svg"
                  width={18}
                  height={18}
                  alt="map"
                />
                <li>
                  <a href="tel: (917) 633-6357" className={styles.text}>
                    (917) 633-6357
                  </a>
                </li>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};
