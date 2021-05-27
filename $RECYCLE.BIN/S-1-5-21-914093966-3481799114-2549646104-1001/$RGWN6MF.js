import Link from "next/Link";
const Nav = () => (
  <div>
    <Link href="/">
      <a ClassName="home">HOME</a>
    </Link>
    <Link href="about">
      <a ClassName="about">about</a>
    </Link>
  </div>
);
export default Nav;
