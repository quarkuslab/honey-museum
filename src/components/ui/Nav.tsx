import React from "react";
import Link from "next/link";
import HomePage from "../../app/page";

const Nav = () => {
  return (
    <div className="flex gap-20 m-0 capitalize nav-links  ">
      <Link href={"/"}>Home</Link>
      <Link href={"/aboutus"}>about us</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/contactus"}>Contact us</Link>
    </div>
  );
};

export default Nav;
