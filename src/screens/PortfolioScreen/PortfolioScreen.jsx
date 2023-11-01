import { Overview, Slider } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const PortfolioScreen = () => {
  return (
    <Layout>
      <Banner
        width={1920}
        height={470}
        size="large"
        title="Portfolio"
        image="/images/portfolio.jpg"
      />

      <Overview
        direction="row"
        title="Vernon Tower"
        image="/images/overview.jpg"
        text="Elegantly rising to eight stories, Vernon Tower, set in a sought-after location, showcases a striking grey and white terra-cotta façade. Of its 103 units, it includes 21 dedicated inclusionary homes, all boasting 9ft ceilings, floor-to-ceiling windows, and panoramic waterfront views."
      />
      <Slider />

      <Overview
        direction="row"
        title="East 33rd Street"
        image="/images/overview.jpg"
        text="Elegantly rising to eight stories, Vernon Tower, set in a sought-after location, showcases a striking grey and white terra-cotta façade. Of its 103 units, it includes 21 dedicated inclusionary homes, all boasting 9ft ceilings, floor-to-ceiling windows, and panoramic waterfront views."
      />

      <Slider />
    </Layout>
  );
};
