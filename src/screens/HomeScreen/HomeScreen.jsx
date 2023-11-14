import { Overview, Portfolio, Press, Vertical } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const HomeScreen = ({ data }) => {
  console.log(data, "data");
  return (
    <Layout>
      <Banner
        width={1920}
        height={720}
        alt={data?.banner?.alt}
        title={data?.banner?.title}
        image={data?.banner?.image?.data?.attributes?.url}
        size="medium"
        subTitle={data?.banner?.description}
        button={data?.banner?.text_button}
        buttonPhone={data?.banner?.text_button_phone}
      />
      <Overview
        direction="column"
        title={data?.block?.title}
        image={data?.block?.image?.data?.attributes?.url}
        text={data?.block?.description}
      />
      <Vertical
        slides={data?.SliderTeam?.slider}
        title={data?.SliderTeam?.title}
        description={data?.SliderTeam?.description}
      />
      <Portfolio
        slides={data?.Portfolio?.Slider}
        title={data?.Portfolio?.title}
      />
      <Press
        slides={data?.PressNews?.Slider}
        title={data?.PressNews?.title}
        description={data?.PressNews?.description}
      />
    </Layout>
  );
};
