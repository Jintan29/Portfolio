"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'



const About = () => {
    const graduatedPic = "/assets/graduated.png"

    const MotionImage = motion(Image)



  return (
    <>
        <div className="pb-10 py-6 mt-20">

            <motion.h2
            initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.1}}
            className='text-center text-4xl font-bold my-16'>
                About
            </motion.h2>
           
            {/* แบ่ง 2 ก้อนซ้ายขวา */}
            <div className="flex flex-wrap ">

                <div className="w-full lg:w-1/2 ">

                    <div className="flex justify-center w-full aspect-auto ">
                        <MotionImage
                        initial={{opacity:0,x:-100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.8,delay:0.2}}
                        src={graduatedPic}
                        alt='img'
                        width={250}
                        height={250}
                        
                        />
                    </div>

                </div>

                <motion.div
                 initial={{opacity:0,x:100}}
                 whileInView={{opacity:1,x:0}}
                 transition={{
                     duration:0.5
                 }}
                className="w-full mt-3 lg:mt-0 lg:w-1/2 text-lg">
                    <motion.p 
                    initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{
                        duration:0.8
                    }}
                    className='my-3' style={{textIndent: '2rem'}}>
                        Hello , I'm Sutthipphat Kriklin  a recent graduate with a Bachelor's degree in Computer Engineering. I am particularly
                     interested in pursuing opportunities in <span className='text-primary'>backend development</span> and <span className='text-primary'>full-stack development</span> roles.
                    </motion.p>
                    <motion.p 
                     initial={{opacity:0,x:100}}
                     whileInView={{opacity:1,x:0}}
                     transition={{
                         duration:1
                     }}
                    style={{textIndent: '2rem'}} >
                    Currently, I am seeking a <span className='text-primary'>full-time position</span> to enhance my technical expertise and problem-solving skills while 
                    collaborating effectively with diverse teams. I maintain a passion for continuously learning new technologies to foster my professional growth in this field.
                    </motion.p>

                    <motion.div
                    initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{
                        duration:1.2
                    }}
                    className="flex flex-col gap-2 pt-5">
                        <h2 className=' text-3xl font-bold'>Education</h2>
                        
                        <div className="flex flex-col ">
                            <p className='text-sm'>2021-2025</p>
                            <h2 className='font-semibold text-xl'>Bachelor’s Degree in Computer Engineering</h2>
                            <h3>Faculty of Engineering, Naresuan University</h3>
                            <h3>GPA : 3.53</h3>
                        </div>
                    
                    </motion.div>

                </motion.div>
            </div>

        </div>
    </>
  )
}

export default About