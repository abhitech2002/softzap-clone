interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-black from-blue-500 to-purple-600 text-white min-h-screen flex items-center justify-center">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-20 text-center max-w-3xl">
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full mb-4 hover:bg-white hover:text-black transition-all">
            New AI Automated LeadGen
          </button>

          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
            Grow your business  with our lead generation software
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 mb-8">
            Amet convallis tempus lobortis dui. Nec dapibus pharetra ipsum
            commodo tristique viverra.
          </p>

          <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-all">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
