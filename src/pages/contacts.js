import { client } from "@/graphql/apollo-client";
import { PORTFOLIOPAGE } from "@/graphql/portfolio";

import { ContactsScreen } from "@/screens/ContactsScreen/ContactsScreen";

export default function Contacts() {
  return <ContactsScreen />;
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
