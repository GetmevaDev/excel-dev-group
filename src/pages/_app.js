import "@/styles/globals.scss";
import { Montserrat } from "@next/font/google";

export const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mont.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}
