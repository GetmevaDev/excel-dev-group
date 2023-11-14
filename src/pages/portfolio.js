import { client } from "@/graphql/apollo-client";
import { PORTFOLIOPAGE } from "@/graphql/portfolio";
import { PortfolioScreen } from "@/screens/PortfolioScreen/PortfolioScreen";

export default function Portfolio({ data }) {
  return <PortfolioScreen data={data} />;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PORTFOLIOPAGE,
  });
  return {
    props: {
      data: data.portfolioPage.data.attributes,
    },
  };
}
