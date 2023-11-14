import { Overview, Slider } from "@/shared/components";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const PortfolioScreen = ({ data }) => {
  console.log(data, "data");
  return (
    <Layout>
      <Banner
        width={1920}
        height={470}
        size="large"
        alt={data?.banner?.alt}
        title={data?.banner?.title}
        image={data?.banner?.image?.data?.attributes?.url}
      />

      {data?.BlockSlider?.map((item) => (
        <div key={item.id}>
          <Overview
            direction="row"
            title={item?.BlockItem?.title}
            image={item?.BlockItem?.image?.data?.attributes?.url}
            text={item?.BlockItem?.description}
          />
          <Slider images={item?.SliderImage} />
        </div>
      ))}
    </Layout>
  );
};
