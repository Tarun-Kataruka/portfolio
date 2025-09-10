"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiGo,
  SiExpress,
  SiJest,
  SiDocker,
  SiMicrosoftazure,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiGithubactions,
} from "react-icons/si";

const experience = {
  title: "Experience",
  description:
    "Hands-on industry experience where I contributed to real-world projects, honed my technical expertise, and built scalable solutions.",
  items: [
    {
      title: "Full Stack Developer Intern",
      company: "Touchtorate",
      date: "Feb 2025 – Jul 2025",
      description: `
        • Built and deployed scalable full-stack solutions with React.js/Next.js on the frontend and Node.js on the backend.  
        • Developed reusable, responsive UI components, improving maintainability and user experience.  
        • Designed and optimized high-performance APIs, reducing latency through Azure CDN caching.  
        • Engineered real-time data synchronization with webhooks and integrated secure OAuth 2.0 authentication for seamless connectivity across external platforms.  
      `,
    },
    {
      title: "Software Developer",
      company: "OriginAI (Studio Ilios)",
      date: "Sept 2025 – Present",
      description: `
        • Building scalable and efficient full-stack web applications with React.js, Next.js, and Node.js.  
        • Designing and deploying machine learning models using Python and TensorFlow/PyTorch to solve real-world problems.  
        • Integrating modern cloud services (AWS/Azure) for deployment, scalability, and monitoring.  
        • Collaborating with cross-functional teams to deliver AI-driven features and ensure robust system performance.  
      `,
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "My Education",
  description:
    "I completed my high schooling at Delhi Public School Ranchi, where I achieved a remarkable 92% in my final examinations. Building on this strong academic foundation, I am currently pursuing a Bachelor of Engineering (B.E) degree at Dayananda Sagar College of Engineering in Bangalore, with a current CGPA of 9. My educational journey has been marked by a commitment to excellence and a passion for learning, which I continue to cultivate as I advance through my engineering studies.",
  items: [
    {
      title: "Bachelor of Engineering",
      company: "Dayananda Sagar Colleege of Engineering",
      date: "2022-Present",
      description:
        "Currently pursuing a Bachelor of Technology in Computer Science at DSCE, Bangalore. Building strong foundations in software engineering, data structures, algorithms, and modern web technologies while working on real-world projects and internships.",
    },
    {
      title: "High School",
      company: "Delhi Public School",
      date: "2020-2022",
      description:
        "Completed higher secondary education in the Science stream with a focus on PCM. Developed analytical thinking, problem-solving skills, and a curiosity for technology that inspired my journey into computer science.",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "As a Full Stack and Software Developer, I bring expertise in designing and building scalable applications across both front-end and back-end ecosystems. My technical skill set spans modern web technologies such as MERN Stack and Next.js, as well as strong proficiency in programming languages like C++ and Go. I excel at crafting dynamic, user-friendly interfaces, architecting efficient server-side systems, and integrating diverse technologies into cohesive solutions. With a strong foundation in problem-solving and software design, I focus on delivering reliable, maintainable, and performance-driven applications that meet evolving business and user needs.",
  categories: [
    {
      category: "Languages",
      items: [
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiGo />, name: "Go" },
        { icon: <FaPython />, name: "Python" },
      ],
    },
    {
      category: "Technologies / Frameworks",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiJest />, name: "Jest" },
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      category: "DevOps / Cloud",
      items: [
        { icon: <SiDocker />, name: "Docker" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiMicrosoftazure />, name: "Azure" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
      ],
    },
    {
      category: "Databases / Tools",
      items: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaGitAlt />, name: "Git" },
      ],
    },
  ],
};

const achievements = {
  title: "Achievements",
  description:
    "Milestones and recognitions that reflect my passion for technology, problem-solving, and continuous learning.",
  items: [
    {
      title: "HackGlobal 2024 (Top 9/30)",
      description:
        "Ranked Top 9 out of 30 teams at HackGlobal 2024 Hackathon, Singapore – Oct 2024.",
      image: "/achievements/HackGlobal.png",
    },
    {
      title: "HackBangalore Winner",
      description:
        "1st Place among 617 participants at HackBangalore 2024 Hackathon – May 2024",
      image: "/achievements/HackBnglr.png",
    },
    {
      title: "100+ Days of LeetCode",
      description:
        "Successfully completed 100 days in 2025 of consistent coding challenges, strengthening problem-solving and algorithmic thinking.",
      image: "/achievements/100daysLC.png",
    },
    {
      title: "50+ Days of LeetCode",
      description:
        "Successfully completed 50 days in 2024 of consistent coding challenges, strengthening problem-solving and algorithmic thinking.",
      image: "/achievements/50daysLC.png",
    },
  ],
};

const certifications = {
  title: "Certifications",
  description:
    "Industry-recognized certifications that demonstrate my continuous learning, technical expertise, and commitment to staying updated with emerging technologies.",
  items: [
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      date: "2025",
      description:
        "In-depth knowledge of cloud infrastructure, virtualization, distributed computing, and service models.",
      image: "/certificates/nptel.png",
    },
    {
      title: "Data Structures & Algorithms",
      provider: "Udemy",
      date: "2024",
      description:
        "Mastered core data structures and algorithmic problem-solving with real-world coding exercises.",
      image: "/certificates/dsa.png",
    },
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      date: "2023",
      description:
        "Comprehensive training covering HTML, CSS, JavaScript, React.js, Node.js, and database management.",
      image: "/certificates/webd.png",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TooltipContent } from "@/components/ui/tooltip";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="education"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="relative bg-gradient-to-br from-[#1e1e24] to-[#2b2b34] 
                                   p-6 rounded-2xl shadow-lg 
                                   flex flex-col justify-between 
                                   transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
                        >
                          {/* Date */}
                          <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                            {item.date}
                          </span>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-white mt-2">
                            {item.title}
                          </h3>

                          {/* Company */}
                          <div className="flex items-center gap-3 mt-4">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <p className="text-white/70 text-base">
                              {item.company}
                            </p>
                          </div>

                          {/* Optional description */}
                          {item.description && (
                            <p className="mt-3 text-white/50 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <div className="flex flex-col gap-10">
                    {skills.categories.map((category, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <h4 className="text-2xl font-semibold text-accent">
                          {category.category}
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                          {category.items.map((skill, index) => (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-10">
                {/* Section Title */}
                <h3 className="text-4xl font-extrabold tracking-tight text-white">
                  {experience.title}
                </h3>
                <p className="max-w-[650px] text-white/70 text-lg mx-auto xl:mx-0 leading-relaxed">
                  {experience.description}
                </p>

                {/* Experience Cards */}
                <ScrollArea className="h-[450px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="relative bg-gradient-to-br from-[#1e1e24] to-[#2b2b34]
            p-8 rounded-2xl shadow-lg 
            flex flex-col justify-start gap-4
            border border-white/10
            transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-emerald-400/40"
                      >
                        {/* Date */}
                        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
                          {item.date}
                        </span>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                          <p className="text-white/80 text-base font-medium">
                            {item.company}
                          </p>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="mt-2 text-white/60 text-sm leading-relaxed whitespace-pre-line">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="achievements"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-10">
                {/* Section Title */}
                <h3 className="text-4xl font-extrabold tracking-tight text-white">
                  {achievements.title}
                </h3>
                <p className="max-w-[650px] text-white/70 text-lg mx-auto xl:mx-0 leading-relaxed">
                  {achievements.description}
                </p>

                {/* Achievements Cards */}
                <ScrollArea className="h-[500px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {achievements.items.map((item, index) => (
                      <li
                        key={index}
                        className="relative bg-gradient-to-br from-[#1e1e24] to-[#2b2b34]
              p-6 rounded-2xl shadow-lg 
              flex flex-col justify-start gap-4
              border border-white/10
              transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-emerald-400/40"
                      >
                        {/* Image */}
                        {/* Image */}
                        {item.image && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="w-full h-96 overflow-hidden rounded-lg cursor-pointer">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[700px] object-contain rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        )}

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>

                        {/* Description */}
                        {item.description && (
                          <p className="text-white/60 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="certifications"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                {/* Title */}
                <h3 className="text-4xl font-bold">{certifications.title}</h3>

                {/* Description */}
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>

                {/* Certificates List */}
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.items.map((cert, index) => (
                      <li
                        key={index}
                        className="relative bg-gradient-to-br from-[#1e1e24] to-[#2b2b34]
              p-6 rounded-2xl shadow-lg transition-transform 
              duration-300 hover:scale-[1.02] hover:shadow-xl"
                      >
                        {/* Certificate Image */}
                        {cert.image && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="w-full h-56 mb-4 overflow-hidden rounded-xl border border-white/10">
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-full h-full object-contain bg-[#1a1a1f] p-2"
                                />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-[700px] object-contain rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>
                        )}

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white">
                          {cert.title}
                        </h3>

                        {/* Provider + Date */}
                        <p className="text-emerald-400 text-sm mt-1">
                          {cert.provider} • {cert.date}
                        </p>

                        {/* Description */}
                        <p className="mt-3 text-white/60 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
