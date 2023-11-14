import { client } from "@/graphql/apollo-client";
import { HOMEPAGE } from "@/graphql/home";
import { HomeScreen } from "@/screens/HomeScreen/HomeScreen";

export default function Home({ data }) {
  return <HomeScreen data={data} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: HOMEPAGE,
  });
  return {
    props: {
      data: data.homePage.data.attributes,
    },
  };
}
