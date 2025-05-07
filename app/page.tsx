import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stack from "./components/Stack/Stack";
import Project from "./components/Project/Project"
import Expericence from "./components/Expericence/Expericence";
import Contract from "./components/Contract/Contract";
import About from "./components/About/About";



export default function Home() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      
      {/*Bg ดำ + ก้อนกลมๆสีขาว */}
      <div className="fixed inset-0 -z-10">
         <div className="relative h-full w-full bg-black">

          {/* ก้อนขาว จากการไล่สี gradient */}
            <div className="absolute bottom-0 left-0 right-0 top-0
            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
            linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            bg-[size:14px_24px]" />

            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px]
            bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"/>

         </div>
      </div>

      {/* container here รวม components ต่างๆตั้งแต่ header -> footer*/}
      <div className="container mx-auto px-8">
        <Navbar  />
        <div id="home" className="scroll-mt-36"><Hero/></div>
        <div id="about" className="scroll-mt-36"><About/></div>
        <div id="skill" className="scroll-mt-36"><Stack/></div>
        <div id="project" className="scroll-mt-36"><Project/></div>
        <div id="experience" className="scroll-mt-36"><Expericence/></div>
        <div id="contract" className="scroll-mt-24"><Contract/></div>
      </div>

    </div>
  );
}
