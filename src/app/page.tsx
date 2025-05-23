import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen  bg-primary text-white font-electrolize">
 

     <nav className="fixed top-0 left-0 w-full bg-testpurple shadow z-10">
        <ul className="flex justify-center gap-8 py-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
         </ul>
      </nav>

      {/* Intro Section */}
      <main id = "about" className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 gap-10 text-center md:text-left">
        
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold mb-4 drop-shadow">
            Hey, I&apos;m Isaac
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            I&apos;m a computer science student passionate about systems, compilers,
            and programming language research. I build fast, clean tools—and
            love making sense of complex code.
          </p>
        </div>

        {/* Image */}
        <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-lg border-4 border-white/10">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={500}          
            height={500}         
            className="object-cover w-full h-full"
          />
        </div>
      </main>

      {/*Projects Section*/}

     <section className="max-w-3xl mx-auto p-6 bg-primary rounded-lg">
        <h2 className="text-xl font-bold">
          Centered Section</h2>
    </section>

    </div>
  );
}
