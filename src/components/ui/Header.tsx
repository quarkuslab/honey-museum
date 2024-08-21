import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className=" container mx-auto flex justify-between items-center ">
        <Link href="/">
          <h1 className="text-white  ">Vattavada Honey museum</h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8"></div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
