import { client } from "@/graphql/apollo-client";
import "@/styles/globals.scss";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { Montserrat } from "@next/font/google";
import "swiper/css";
import "swiper/css/pagination";

export const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mont.variable} `}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </main>
  );
}
