
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white font-electrolize flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
        Welcome to Isaac's Site
      </h1>
      <p className="text-xl max-w-xl text-center mb-8 opacity-90">
        This personal site is powered by Next.js and styled with Tailwind CSS v3.
      </p>
      <a
        href="#"
        className="bg-white text-primary font-semibold py-2 px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition"
      >
        Explore Projects
      </a>
    </main>
  );
}
