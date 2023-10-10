import {
  Banner,
  Button,
  Description,
  Logo,
  Menu,
  Typography,
} from "@/shared/ui";

export default function Home() {
  return (
    <div>
      {/* <Button>Click To Call</Button> */}

      <Logo />

      <Menu />
      <Banner>
        <Typography tag="h2">Excel Development Group</Typography>
        <Description>
          Innovate. Develop. Excel. The Essence of The Excel Group.
        </Description>
        <Button>Click to call</Button>
      </Banner>
    </div>
  );
}
