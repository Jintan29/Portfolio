"use client"
import React from "react";
import {motion} from "framer-motion"

const Expericence = () => {

  const EXPERIENCES = [
    {
      year: "APR - JUN  (2024)",
      role: "Full Stack Developer Intern",
      company: "Somsri Garment Co., Ltd",
      description: `During my internship as a Full Stack Developer, I gained comprehensive experience in professional software development practices`,
      responsibilities:[
        'Implemented MVC architecture principles in production-level applications',
        'Designed and optimized database structures according to industry standards',
        'Developed RESTful APIs with proper validation mechanisms',
        'Integrated frontend systems with backend APIs for seamless data communication',
        'Utilized Git for version control and collaborative development'
      ],
      tech: ["Node.js","TypeScript" ,"Nuxt.js", "TailwindCSS" ,"Adonis.js", "PrismaORM","PostgreSQL"],
    }, 
    {
      year: "JUL - MAR (2024 - 2025)",
      role: "Senior Project",
      company: "Project",
      description: `Developed a comprehensive digital platform for tracking and visualizing poverty data across Phitsanulok province, providing analytical tools for stakeholders and self-service access for household members.`,
      responsibilities: [
        "Designed and implemented relational database schemas for household poverty data",
        "Built secure authentication system with JWT including password reset functionality via one-time links",
        "Created interactive dashboard with dynamic charts displaying historical income data ",
        "Developed PDF report generation system for administrative assistance records",
        "Implemented Line Official Account integration enabling household members to access their own data"
      ],
      tech: ["Node.js","JavaScript", "React.js", "TailwindCSS", "Express.js","SequelizeORM","PostgreSQL"],
    },
    {
      year: "SEP - OCT (2025)",
      role: "Point of Sale",
      company: "Project",
      description: `comprehensive Point of Sale system designed to assist retailers in efficiently managing their business operations.`,
      responsibilities: [
       "Developed product category management and image upload functionality, enabling merchants to systematically organize their product information",
       "Implemented sales and billing systems to streamline transaction processes and enhance operational efficiency",
      ],
      tech:  ["Node.js","JavaScript", "React.js", "Bootstrap", "Express.js","SequelizeORM","PostgreSQL"],
    },
    
  ];

  return (
    <>
      <div className="pb-4 ">
        <motion.h2
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="text-center text-4xl mb-8 my-20">Exeperience</motion.h2>

        <div className="">
            {EXPERIENCES.map((item,index)=>(
                
                <div 
                className="mb-8 flex flex-wrap lg:justify-center " 
                key={index}>

                    {/* section year */}
                    <motion.div
                    initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4 ">
                        <p className="mg-2 text-sm text-stone-400">{item.year}</p>
                    </motion.div>

                    {/* section role */}
                    <motion.div
                    initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                    className="w-full lg-w-3/4 max-w-xl ">
                        <h3 className="mb-2 font-semibold">

                            {item.role} - {" "}
                            <span className="text-sm text-slate-500">
                                {item.company}
                            </span>

                        </h3>
                        <p className="mb-2 text-stone-400">{item.description}</p>
                        <h3 className="font-semibold mb-1">Responsibilities</h3>
                        {item.responsibilities && (
                          <ul className="mb-4 text-stone-400 list-disc pl-5">
                            {item.responsibilities.map((resp,index)=>(
                              <li key={index} className="mb-2">
                                {resp}
                              </li>
                            ))}
                          </ul>
                          
                        )}

                        {item.tech.map((tech,index)=>(
                            <span
                            className="mr-2 mt-4 rounded bg-stone-800 px-2 py-1
                            text-stone-400 font-medium"
                            key={index}>
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                </div>
            ))}
        </div>

      </div>
    </>
  );
};

export default Expericence;
