"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
// import icon
import { SiNextdotjs, SiPostman, SiMysql,SiExpress ,SiNuxtdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Stack = () => {
  type StackIconType = {
    stack: string;
    icon: React.ReactElement<{ className?: string }>; //ระบุว่ามี prop className
    className: string;
    variants: Variants;
  };

  const Programming = [
    "HTML",
    "CSS",
    "JavaScript",
    "Typscript",
    "Python",
    "Java",
    "SQL",
  ];

  const Framwork = [
    "React.js",
    "Next.js",
    "Nuxt.js",
    "TailwindCSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "Adonis.js",
    'PostgreSQL',
    'MySQL'
  ];

  const Tools = [
    'Git',
    'Postman',
    'Line Bot Designer',
    'Redux',
    'Flowbite UI',
    'ChartJs',
    'Recharts',
    'Sequelize ORM',
    'Prisma ORM',
    'Messaging API (Line)'
  ]

  //สร้าง function รับค่าหน่วงเวลาเข้ามาเพื่อกำหนด animation
  const iconVaraints = (duration: number): Variants => ({
    initial: { y: 10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "reverse" as const,
      },
    },
  });

  // ถ้ากำหนด class กับ icon ไว้ต้องใช้ React.cloneElement
  const StackIcon: StackIconType[] = [
    {
      stack: "react",
      icon: <FaReact />,
      className: "text-5xl md:text-7xl text-blue-300",
      variants: iconVaraints(2.5),
    },
    {
      stack: "NEXT",
      icon: <SiNextdotjs />,
      className: "text-5xl md:text-7xl text-white",
      variants: iconVaraints(3),
    },
    {
      stack: "tailwind",
      icon: <RiTailwindCssFill />,
      className: "text-5xl md:text-7xl text-sky-600",
      variants: iconVaraints(2),
    },
    {
      stack: "nodeJS",
      icon: <FaNodeJs />,
      className: "text-5xl md:text-7xl text-green-600",
      variants: iconVaraints(3),
    },
    {
      stack: "postman",
      icon: <SiPostman />,
      className: "text-5xl md:text-7xl text-orange-600",
      variants: iconVaraints(5),
    },
    {
      stack: "express",
      icon: <SiExpress />,
      className: "text-5xl md:text-7xl text-white",
      variants: iconVaraints(5),
    },
    {
      stack: "posgresql",
      icon: <BiLogoPostgresql />,
      className: "text-5xl md:text-8xl text-blue-300",
      variants: iconVaraints(2),
    },
  ];

  return (
    <>

      <div className="my-24">
        
        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="mt-10 text-4xl font-bold text-center ">Skill</motion.div>

        <div className="grid grid-cols-1 gap-5 text-center my-14">
          <div className=" rounded-md py-5 px-5">
            
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="text-start text-xl font-semibold">
              Stack & Programming
            </motion.div>

            <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="flex flex-wrap gap-2 mt-3">
              {Programming.map((item,index)=>(
                <motion.span
                whileHover={{
                  scale:1.1,
                  transition:{
                    duration:0.3,
                    ease:"easeInOut"
                  }
                }} 
                key={index}
                className="bg-stone-300 hover:cursor-pointer text-stone-800 text-sm p-3 py-1 rounded">
                  {item}
                </motion.span>
              ))}
            </motion.div>

          </div>

          <div className=" rounded-md py-5 px-5">
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="text-start text-xl font-semibold">
              Framework & Database
            </motion.div>

            <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            className="flex flex-wrap gap-2   rounded mt-3">
              {Framwork.map((item,index)=>(
                <motion.span
                whileHover={{
                  scale:1.1,
                  transition:{
                    duration:0.3,
                    ease:"easeInOut"
                  }
                }}
                key={index}
                className="text-sm hover:cursor-pointer bg-stone-300 text-stone-800 p-3 py-1 rounded"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

          </div>

          <div className=" rounded-md py-5 px-5">
            <motion.div 
             initial={{opacity:0,x:-100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.6}}
            className="text-start text-xl font-semibold">Tools & Libaries</motion.div>
            <motion.div
             initial={{opacity:0,x:100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.8}}
            className="flex flex-wrap gap-2   rounded mt-3">
              {Tools.map((item,index)=>(
                <motion.span
                whileHover={{
                  scale:1.1,
                  transition:{
                    duration:0.3,
                    ease:"easeInOut"
                  }
                }}
                key={index}
                className="text-sm hover:cursor-pointer bg-stone-300 text-stone-800 p-3 py-1 rounded"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="pb-2 pt-14">
          {/* เก็บ loop แสดงภาพ icon   */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {StackIcon.map((item, index) => (
              <motion.div
                variants={item.variants}
                initial="initial"
                animate="animate"
                className="flex items-center gap-1"
                key={index}
              >
                {React.cloneElement(item.icon, { className: item.className })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
