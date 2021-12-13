import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div className="w-screen text-white fixed z-50">
      <p className="space-x-4 flex flex-row content max-w-screen-lg mx-auto justify-end py-2">
        <p className="hover:underline">
          <Link href="/">Home</Link>
        </p>
        <p className="hover:underline">
          <Link href="/about">About</Link>
        </p>
        <p className="hover:underline">
          <Link href="/events">Events</Link>
        </p>
      </p>
    </div>
  );
};

export default Navbar;
