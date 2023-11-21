import { Logo } from "..";
import { LinkItem } from "../link/link";

const list = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Portfolio", link: "/portfolio" },
  { id: 3, text: "News", link: "/news" },
  { id: 4, text: "About Us", link: "/about-us" },
  { id: 5, text: "Contacts", link: "/contacts" },
];

export const Navigation = () => {
  return (
    <>
      {list.map((item) => (
        <LinkItem key={item.id} {...item} />
      ))}
    </>
  );
};
