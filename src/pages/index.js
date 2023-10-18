import { Overview, Portfolio } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Overview />

      <Portfolio />
    </Layout>
  );
}
