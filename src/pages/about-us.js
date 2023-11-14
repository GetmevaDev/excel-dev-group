import { client } from "@/graphql/apollo-client";
import { PORTFOLIOPAGE } from "@/graphql/portfolio";
import { AboutUsScreen } from "@/screens/AboutUsScreen/AboutUsScreen";
import { PortfolioScreen } from "@/screens/PortfolioScreen/PortfolioScreen";

export default function AboutUs() {
  return <AboutUsScreen />;
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: PORTFOLIOPAGE,
//   });
//   return {
//     props: {
//       data: data.portfolioPage.data.attributes,
//     },
//   };
// }
