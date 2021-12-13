import type { NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div className="w-screen py-10 bg-primary text-white fixed z-50">
      <div className="space-x-4 flex flex-row content max-w-screen-lg mx-auto justify-end py-2">
        <p className="hover:underline">
          <Link href="/">Home</Link>
        </p>
        <p className="hover:underline">
          <Link href="/about">About</Link>
        </p>
        <p className="hover:underline">
          <Link href="/events">Events</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
