import { Overview, Portfolio, Press, Vertical } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const HomeScreen = () => {
  return (
    <Layout>
      <Banner />
      <Overview />
      <Vertical />
      <Portfolio />
      <Press />
    </Layout>
  );
};
