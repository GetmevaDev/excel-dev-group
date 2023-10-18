import { Link } from "../link/link";

const list = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Portfoli", link: "/port" },
];

export const Navigation = () => {
  return (
    <>
      {list.map((item) => (
        <Link key={item.id} {...item} />
      ))}
    </>
  );
};
