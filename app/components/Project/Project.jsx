"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { FaEye, FaCode } from "react-icons/fa6";
import Link from "next/link";

const Project = () => {
  // img collection
  const seniorProject = "/assets/SeniorProject.PNG";
  const senior2 = "/assets/senior2.PNG";
  const senior3 = "/assets/senior4.PNG";
  const senior4 = "/assets/senior3.jpg";
  const senior5 = "/assets/senior5.PNG";
  const senior6 = "/assets/senior6.png";
  const senior7 = "/assets/senior7.PNG";

  const posSystem = "/assets/Pos.PNG";
  const posSystem2 = "/assets/pos2.PNG";
  const posSystem3 = "/assets/pos3.PNG";
  const posSystem4 = "/assets/pos4.PNG";
  const posSystem5 = "/assets/pos5.PNG";

  const cofeeShop = "/assets/cofee_shop.PNG";
  const travel = "/assets/Travel.PNG";
  const headphoneShop = "/assets/Headphone.PNG";

  //แสดงผล project modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const Project = [
    {
      id: 1,
      img: seniorProject, //main
      images: [
        seniorProject,
        senior2,
        senior3,
        senior4,
        senior5,
        senior6,
        senior7,
      ],
      title: "Senior Project",
      des: `Comprehensive digital platform for tracking and visualizing poverty 
      data across Phitsanulok province`,
      techStack: [
        "React",
        "Redux",
        "TailwindCSS",
        "Flowbite",
        "Node.js",
        "Express.js",
        "SequelizeORM",
        "PostgreSQL",
      ],
      preview: "https://digital-poverty-aid-fontend.vercel.app/",
      code: "https://github.com/Jintan29/digital-poverty-aid-fontend",
    },
    {
      id: 2,
      img: posSystem,
      title: "POS Shop",
      images: [posSystem, posSystem2, posSystem3, posSystem4, posSystem5],
      des: `Comprehensive Point of Sale system designed to assist retailers 
      in efficiently managing their business operations.`,
      techStack: [
        "React",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "SequelizeORM",
        "PostgreSQL",
      ],
      preview: "",
      code: "https://github.com/Jintan29/POS_workshop_Web",
    },
    {
      id: 3,
      img: cofeeShop,
      images: [cofeeShop],
      title: "Cofee Shop",
      des: "A responsive landing page showcasing product information with elegant animations powered by Framer Motion.",
      techStack: ["Next.js", "TailwindCSS", "Framer-motion"],
      preview: "https://motion-workshop1-rho.vercel.app/",
      code: "https://github.com/Jintan29/motion_workshop1",
    },
    {
      id: 4,
      img: travel,
      images: [travel],
      title: "Travel",
      des: "A beautiful website highlighting stunning travel destinations to inspire and promote tourism.",
      techStack: ["Next.js", "TailwindCSS", "Framer-motion"],
      preview: "https://motionworkshop2-umber.vercel.app/",
      code: "https://github.com/Jintan29/motionworkshop2",
    },
    {
      id: 5,
      img: headphoneShop,
      images: [headphoneShop],
      title: "Ecommerse simple page",
      des: "A sleek and modern headphone store website featuring smooth product previews and interactive mouse tracking effects for an enhanced user experience.",
      techStack: ["Next.js", "TailwindCSS", "Framer-motion"],
      preview: "https://motion-workshop3-six.vercel.app/",
      code: "https://github.com/Jintan29/motion_workshop3",
    },
  ];

  //เปิดปิด modal
  const openModl = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  //การแสดงผล cusal img

  const nextPage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevPage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {}, [selectedProject]);

  return (
    <div className="pb-12">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-bold tracking-tight"
      >
        Project
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8"
      >
        {Project.map((item, index) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              key={index}
              className="max-w-sm max-h-md w-full flex flex-col gap-3 items-center "
            >
              <div className="relative w-full [200px] aspect-video ">
                <Image
                  src={item.img}
                  width={300}
                  height={350}
                  alt="img"
                  className=" rounded-md w-full h-full object-cover"
                />
              </div>

              <span className="flex justify-center w-full text-xl">
                {item.title}
              </span>
              <button
                onClick={() => openModl(item)}
                className="text-xl py-2 bg-primary hover:bg-primaryDark w-full rounded-md text-slate-800"
              >
                More Info
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-75 flex items-center justify-center p-4 z-40"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="bg-bgDark  rounded-lg w-full max-w-2xl  overflow-hidden"
            >
              {/* close */}
              <div className="flex justify-end m-5 ">
                <button
                  onClick={() => closeModal()}
                  className="z-10 bg-stone-800 text-stone-200 hover:bg-stone-900 rounded-md"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Carousel */}

              <div className="relative h-64 md:h-86 max-w-2xl mx-5  my-3  ">
                {/* <AnimatePresence mode="wait"></AnimatePresence> */}
                <div className="absolute inset-0 ">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt="img"
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                {/* ลูกศรเลื่อน */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevPage()}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-600 hover:bg-slate-700 rounded-full p-2 shadow-md"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={() => nextPage()}
                      className="absolute top-1/2 right-4 shadow-md bg-slate-600 hover:bg-slate-700 p-2 -translate-y-1/2 rounded-full "
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* แสดงจำนวนรูปทั้งหมด */}
                {selectedProject.images.length > 1 && (
                  <>
                    <div className="absolute bottom-4 left-0 right-0 flex gap-2 justify-center">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex
                              ? "bg-primary"
                              : "bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* รายละเอียด Project */}
              <div className="px-6 flex flex-col gap-y-2">
                <h2 className="text-2xl font-bold  text-primary leading-loose">
                  {selectedProject.title}
                </h2>
                <p className="text-stone-300">{selectedProject.des}</p>

                <h4 className="mt-3 uppercase font-semibold">tech stack</h4>

                <div className="flex flex-wrap text-sm gap-3">
                  {selectedProject.techStack &&
                    selectedProject.techStack.map((item, index) => (
                      <>
                        <span
                          key={index}
                          className="text-sm bg-stone-300 text-stone-800 p-3 py-1 rounded"
                        >
                          {item}
                        </span>
                      </>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-2 my-4">
                  {selectedProject.preview ? (
                    <Link
                      href={selectedProject.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button className="w-full flex justify-center items-center gap-2 bg-primary p-2 rounded-md text-slate-800">
                        <FaEye />
                        Live Demo
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}

                  {selectedProject.code ? (
                    <Link
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full"
                    >
                      <button className="w-full h-full min-h-[40px] flex justify-center items-center gap-2 bg-slate-700 rounded-md">
                        <FaCode /> View Source
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OldComponents = () => {
  const mongodb = "/assets/mongodb.svg";
  const angular = "/assets/angular.svg";
  const svelte = "/assets/svelte.svg";
  const nest = "/assets/nestjs.svg";

  const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: mongodb,
      des: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      tech: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: angular,
      des: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      tech: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: svelte,
      des: "A personal portfolio website showcasing projects, skills, and contact information.",
      tech: ["HTML", "CSS", "Svelte", "Tailwind"],
    },
    {
      title: "Blogging Platform",
      image: nest,
      des: "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      tech: ["HTML", "CSS", "Nest.js", "Express", "mySQL"],
    },
  ];

  return (
    <>
      {/* loop แสดงผล */}
      <div className="flex flex-col gap-12 p-0 lg:p-12">
        {PROJECTS.map((item, index) => (
          <div
            className="flex flex-col  gap-8 lg:flex-row items-center lg:items-center
                lg:gap-12
                "
            key={index}
          >
            {/* img  responsive*/}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/5 w-full flex justify-center lg:justify-start"
            >
              <Image
                src={item.image}
                alt="img"
                width={190}
                height={190}
                className="shadow-lg object-contain"
              />
            </motion.div>

            {/* txt section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-4/5 w-full"
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-stone-400 mb-4 leading-relaxed">{item.des}</p>

              {/* txt stack */}
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, techIndex) => (
                  <span
                    className="inline-block bg-stone-800 text-stone-300 text-sm p-3 
                                py-1 rounded"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
