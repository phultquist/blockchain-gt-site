import React, { useEffect } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import { draw, setup, windowResized } from "../p5/base.p5";
import { motion } from "framer-motion";
import Image from "next/image";

const Sketch =
  typeof window !== "undefined" && dynamic(import("react-p5"), { ssr: false });

const Home: NextPage = () => {
  console.log(typeof window);
  const [component, setComponent] = React.useState(null);
  useEffect(() => {
    setComponent(
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    );
  }, []);

  return (
    <>
      <div className="bg-gradient-to-tr from-[rgb(15,27,53)] via-[rgb(25,39,74)] to-[rgb(48,61,94)] w-screen h-screen">
        <Navbar />
        <div className="flex w-full h-full">
          <div className="absolute z-0">{component}</div>
          <div className="m-auto text-white z-10">
            <motion.div
              animate={{
                scale: [0.8, 1],
                opacity: [0, 0, 1],
                y: [100, 0],
              }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src="/blocks.png" layout="fill" alt="blocks" />
              </div>
              <h1 className="uppercase text-center font-bold text-5xl tracking-wider">
                Blockchain
              </h1>
            </motion.div>
            <motion.div
              animate={{
                scale: [0.8, 1],
                opacity: [0, 0, 1],
                y: [50, 0],
              }}
              transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
            >
              <h2 className="uppercase text-center font-light text-2xl">
                At Georgia Tech
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 py-16">
        <h2 className="uppercase font-bold text-3xl text-center">Our Work</h2>
        <div className="grid gap-x-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-10 text-left">
          <div>
            Ribus aut erchili catemperum inumquatus ulli- bus aut entiunt
            magnihitat. Icit, to beaquistis suntia volut ipsant acessi- taspid
            enda que pratem ad qui offici cum ea dellabor ratis nulpa illitem
            intur, omnis accus eostis ilique inciam, sit utatem archilita
            veliaer- spiet mo magnis moluptat odist, tem conem hit, sitatis
            eossent, aut quodis aut ma volene volut verum am ant autem quam
            fuga.
          </div>
          <div>
            Ribus aut erchili catemperum inumquatus ulli- bus aut entiunt
            magnihitat. Icit, to beaquistis suntia volut ipsant acessi- taspid
            enda que pratem ad qui offici cum ea dellabor ratis nulpa illitem
            intur, omnis accus eostis ilique inciam, sit utatem archilita
            veliaer- spiet mo magnis moluptat odist, tem conem hit, sitatis
            eossent, aut quodis aut ma volene volut verum am ant autem quam
            fuga.
          </div>
          <div>
            Ribus aut erchili catemperum inumquatus ulli- bus aut entiunt
            magnihitat. Icit, to beaquistis suntia volut ipsant acessi- taspid
            enda que pratem ad qui offici cum ea dellabor ratis nulpa illitem
            intur, omnis accus eostis ilique inciam, sit utatem archilita
            veliaer- spiet mo magnis moluptat odist, tem conem hit, sitatis
            eossent, aut quodis aut ma volene volut verum am ant autem quam
            fuga.
          </div>
        </div>
      </div>
      <div className="bg-primary text-white w-full p-10">
        <div className="w-full h-[15px] border-b border-yellow-600 text-center">
          <span className="text-xl bg-primary px-4 font-bold uppercase">
            Our Partners
          </span>
        </div>
        <div className="h-20 w-full"></div>
        <div className="border-b border-yellow-600" />
      </div>
    </>
  );
};

export default Home;
