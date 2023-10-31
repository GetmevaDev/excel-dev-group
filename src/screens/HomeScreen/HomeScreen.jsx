import { Overview, Portfolio, Press, Vertical } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const HomeScreen = () => {
  return (
    <Layout>
      <Banner
        width={1920}
        height={720}
        size="medium"
        subTitle="Innovate. Develop. Excel. The Essence of The Excel Group."
        button="Click to Call"
        title="Excel Development Group"
        image="/images/banner.jpg"
      />
      <Overview
        direction="column"
        title="Company Overview"
        image="/images/overview.jpg"
        text="Excel Group has revolutionized the iconic New York City skyline through an impressive collection of residential, office, mixed-use properties. The landmarks have not only elevated the status quo but also established new paradigms for the realm of development."
      />
      <Vertical />
      <Portfolio />
      <Press />
    </Layout>
  );
};
