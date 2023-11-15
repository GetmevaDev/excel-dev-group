import { Cards } from "@/shared/components/Cards/Cards";
import { Layout } from "@/shared/layout/layout";
import { Banner } from "@/shared/widgets";
import React from "react";

export const NewsScreen = ({ data }) => {
  console.log(data, "data");
  return (
    <Layout>
      <Banner
        width={1920}
        height={470}
        alt={data?.banner?.alt}
        title={data?.banner?.title}
        image={data?.banner?.image?.data?.attributes?.url}
        size="medium"
        subTitle={data?.banner?.description}
        button={data?.banner?.text_button}
        buttonPhone={data?.banner?.text_button_phone}
      />

      <div className="layout">
        <Cards data={data} />
      </div>
    </Layout>
  );
};
