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
      <Overview />
      <Vertical />
      <Portfolio />
      <Press />
    </Layout>
  );
};
