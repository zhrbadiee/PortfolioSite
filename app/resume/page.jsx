"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni amet, minima eaque similique nihil quos, consequatur facere illum officiis a, unde quas expedita hic! Corrupti possimus ea aliquam alias!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luke Colman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+40) 321 654 678",
    },
    {
      fieldName: "Exprience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "luke.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "luke.01@gmail.com",
    },
    {
      fieldName: "Frelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English , Spanish",
    },
  ],
};
// exprience data
const exprience = {
  icon: "/assets/resume/badge.svg",
  title: "My exprience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni amet, minima eaque similique nihil quos, consequatur facere illum officiis a, unde quas expedita hic! Corrupti possimus ea aliquam alias!",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern ",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
  ],
};
// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni amet, minima eaque similique nihil quos, consequatur facere illum officiis a, unde quas expedita hic! Corrupti possimus ea aliquam alias!",
  items: [
    {
      institution: "Online Course Platorm",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "2020-2021",
    },
  ],
};
// skills
const skills = {
  title: "My skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni amet, minima eaque similique nihil quos, consequatur facere illum officiis a, unde quas expedita hic! Corrupti possimus ea aliquam alias!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
  ],
};

export default function Resume(params) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="exprience"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="exprience">Exprience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            
            {/* exprience */}
            <TabsContent value="exprience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{exprience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {exprience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exprience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                    flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                                        text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                    flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                                        text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl 
                                flex justify-center items-center group"
                            >
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
