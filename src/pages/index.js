import { Layout } from "@/shared/layout/layout";
import { Banner, Button, Description, Typography } from "@/shared/ui";

export default function Home() {
  return (
    <Layout>
      <Banner>
        <Typography tag="h2" className="gap-20">
          Excel Development Group
        </Typography>
        <Description className="gap-40">
          Innovate. Develop. Excel. The Essence of The Excel Group.
        </Description>
        <Button>Click to call</Button>
      </Banner>
    </Layout>
  );
}
