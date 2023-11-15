import { client } from "@/graphql/apollo-client";
import { NEWSPAGE } from "@/graphql/news";
import { NewsScreen } from "@/screens/NewsScreen/NewsScreen";

export default function News({ data }) {
  return <NewsScreen data={data} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: NEWSPAGE,
  });
  return {
    props: {
      data: data.newsPage.data.attributes,
    },
  };
}
