"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contract = () => {
  const CONTRACT = {
    address: "Phitsanulok Thailand",
    phone: "082-2645811",
    email: "sutthiphat.forWork@hotmail.com",
  };

  const Social = [
    {
      icon: <FaFacebookSquare size={24} />,
      link: 'https://www.facebook.com/jj.sutthiphat'
    },
    {
      icon: <FaInstagram size={24} />,
      link: 'https://www.instagram.com/sk.jj__/'
    },
    {
      icon: <FaGithub size={24} />,
      link: 'https://github.com/Jintan29'
    },
    {
      icon: <IoLogoLinkedin size={24} />,
      link: 'https://www.linkedin.com/in/sutthiphat-kriklin-214572361/'
    },
  ]

  return (
    <>
      <div className="border-stone-500 border-t pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl my-20 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex tracking-tighter flex-col items-center justify-center gap-4"
        >
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-2"
          >
            {" "}
            <IoLocationSharp className="text-xl" />
            {CONTRACT.address}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}
            className="flex gap-2"
          >
            <BsFillTelephoneFill />
            {CONTRACT.phone}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="hover:underline cursor-pointer flex gap-2"
          >
            <IoMail className="text-xl" />
            {CONTRACT.email}
          </motion.p>

          <div className="flex gap-4 text-2xl mt-3">
            {Social.map((item,index)=>(
              <a
              key={index}
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default Contract;
