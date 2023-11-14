import { client } from "@/graphql/apollo-client";
import { PORTFOLIOPAGE } from "@/graphql/portfolio";

import { RealtyScreen } from "@/screens/RealtyScreen/RealtyScreen";

export default function Realty() {
  return <RealtyScreen />;
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
