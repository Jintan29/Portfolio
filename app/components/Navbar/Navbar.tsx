"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isShow, setShow] = useState(false);

  const menuLinks = [
    {
      name: "home",
      link: "#home",
    },
    {
      name: "about",
      link: "#about",
    },
    {
      name: "skill",
      link: "#skill",
    },
    {
      name: "project",
      link: "#project",
    },
    {
      name: "experience",
      link: "#experience",
    },
    {
      name: "contract",
      link: "#contract",
    },
  ];

  useEffect(() => {
    console.log(isShow);
  }, [isShow]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="inset-x-0 top-0 bg-black/60 h-20 fixed z-40 backdrop-blur-md"
      >
        <nav className=" flex items-center justify-end gap-10 mx-5 md:mx-10 lg:mx-20 text-xl h-full">
          {menuLinks.map((item, index) => (
            <Link
              className="uppercase hidden lg:block"
              href={item.link}
              key={index}
            >
              {item.name}
            </Link>
          ))}

          <div className="lg:hidden">
            <Hamburger toggled={isShow} toggle={() => setShow(!isShow)} />
          </div>
        </nav>
      </motion.div>

      {/* แทบด้านบนเลื่อนลงมาเมื่อกด ham */}
      <AnimatePresence>
        {isShow && (
          <motion.div
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-100}}
          transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2
          }}
          className="lg:hidden fixed inset-0 pt-20 bg-black/60 backdrop-blur-md z-30">
            <div className="container mx-auto px-4 py-8">
              {/* เนื้อหาเมนูโมบาย */}
              <nav className="flex flex-col items-center gap-6 text-white">
                {menuLinks.map((item, index) => (
                  <Link
                    className="uppercase text-2xl w-full flex justify-center"
                    href={item.link}
                    key={index}
                    onClick={() => setShow(false)} // ปิดเมนูเมื่อคลิก
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
