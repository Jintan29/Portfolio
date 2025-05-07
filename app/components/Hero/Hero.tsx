"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"


const Hero = () => {
  const profile = "/assets/sutthiphat.jpg";
  const resumeFile = "/assets/Resume_Sutthiphat_Dev.pdf"

  const MotionImage = motion(Image)
  const MotionLink = motion(Link)

  const containerVaraints = {
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0,
      transition:{
        duration:0.5,
        //เอาไว้ทำไรวะ
        staggerChildren:0.5
      }
    }
  }

  const childVaraints = {
    hidden: {opacity : 0 , x:-100},
    visible: {opacity:1 , x:0,
      transition:{duration:0.5,}
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.setAttribute('download', 'Sutthiphat_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <div className="pb-4 py-6 lg:mg-36 mt-20">

        {/* กล่องคอยปรับกลางจอ | ชิดขวา ตามขนาดหน้าจอ */}

        <div className="flex flex-wrap lg:flex-row-reverse">

          {/* img section หน้าจอเล็กอยู่กลาง หน้าจอใหญ่จะ reverse มาอยู่ด้านขวาของ Text จากการแบ่งครึ่งหน้าจอเมื่ออยู่่ขนาดหน้าจอใหญ่*/}
          <div className="w-full lg:w-1/2   ">
            <div className="flex justify-center lg:p:-8 relative w-full md:w-[400px]
            md:mx-auto lg:w-[450px] aspect-square ">
              <MotionImage
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5,delay:0.5}}
                src={profile}
                alt="profile"
                fill
                className="border border-stone-900 rounded-xl object-cover"
              />
            </div>
          </div>

          {/* text section */}
          <div className="w-full lg:w-1/2 ">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVaraints}
             className="flex flex-col items-center lg:items-start mt-10">
              <motion.span
              variants={childVaraints}
              className="text-3xl text-primaryDark">Hello I Am</motion.span>
              <motion.h2
              // ใส่แล้วจะค่อยๆตามมาหลัง parant ไล่ลำดับลงไปอันล่างช้าสุด
              variants={childVaraints}
              className="pb-2 text-4xl tracking-wider lg:text-8xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                Full Stack Developer
              </motion.h2>
              <motion.h3
              variants={childVaraints}
              className="my-2 max-w-lg py-6 text-xl leading-relaxe tracking-wide">
                This Is My Portfolio Website
              </motion.h3>
              <MotionLink
              variants={childVaraints}
                href={""}
                onClick={()=>handleDownload()}
                className="bg-primary hover:bg-primaryDark rounded-full p-4 text-slate-800 mb-10"
              >
                Download Resume
              </MotionLink>
            </motion.div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Hero;
