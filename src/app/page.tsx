'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next"
const MotionMain = dynamic(() => import("framer-motion").then(mod => mod.motion.main), { ssr: false });
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

export default function Home() {
  const projects = [
    {
      title: "LC2K Pipelined Processor",
      description: "A pipelined simulator for LC2K, a teaching assembly language, used to execute programs.",
      image: "/pipeline.png",
      alt: "LC2K processor diagram"
    },
    {
      title: "Hazel Structure Editor",
      description: "Implemented a structure editor for a subset of Hazel, a functional programming language with unique capabilities for error recovery.",
      image: "/hzl.png",
      alt: "Hazel structure editor interface"
    },
    {
      title: "Whitespace Transpiler",
      description: "Implemented a transpiler for a subset of the whitespace programming language. I'm currently working on a fully fledged compiler, but try out the printing subset!",
      image: "/ws.png",
      alt: "Visuals are tough for this one..."
    }
  ];

  return (
    <><div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[Fira_Code]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-[var(--background)] border-b border-gray-200 dark:border-gray-800 shadow-sm z-20">
        <ul className="flex justify-between items-center px-6 py-4">
          <li className="text-lg font-semibold dark:text-white">Isaac Diemer</li>
          <div className="flex gap-8">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </div>
        </ul>
      </nav>

      {/* About Section */}
      <MotionMain
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10 text-center md:text-left"
      >
        <section id="about" className="w-full py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border dark:border-white/10">
              <Image
                src="/profile.jpeg"
                alt="Profile photo of Isaac Diemer"
                width={600}
                height={400}
                className="w-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
                Hi! I&apos;m Isaac Diemer
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a Computer Science major at the University of Michigan, minoring in Mathematics and Electrical Engineering. Over the past two summers, I’ve interned as a Software Engineer at Delta Dental, where I helped design a system to automate client processes. This work drew heavily on formal methods and mathematical rigor—something I’ve loved seeing applied in an industry setting.
                <br /><br />
                For the past year, I&apos;ve been part of the Hazel research team in the Future of Programming Lab. I began by contributing to Hazel’s type system and have since shifted toward research on programming environments. I’m currently co-authoring a paper on methodologies for evaluating text editors, and our team is building a new editor to address some of the usability gaps we’ve uncovered.
                <br /><br />
                Outside of tech, I enjoy lifting, reading, running, and playing the piano. I have a particular passion for math—especially functional analysis and order theory :)
              </p>
            </div>
          </div>
        </section>
      </MotionMain>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-[#f7f9fc] dark:bg-[var(--background)] py-24 px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 dark:text-white">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, image, alt }, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg text-left hover:scale-[1.02] transition-transform"
            >
              <Image
                src={image}
                alt={alt}
                width={600}
                height={700}
                className="w-full h-80 rounded-lg mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">{description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>
    </div><Analytics /></>
  );
}
