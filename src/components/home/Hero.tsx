import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dogs.png";
import { useRef } from "react";
import BrandLogo from "@/components/BrandLogo";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current?.style.setProperty("--mx", `${x}px`);
    containerRef.current?.style.setProperty("--my", `${y}px`);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="relative overflow-hidden shadow-elegant" onMouseMove={handleMove}>

      <div className="absolute inset-0 z-[0]">
        <img
          src={heroImage}
          alt="Ilustração acolhedora de pet shop no estilo Ghibli"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-bottom opacity-100"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 to-transparent" aria-hidden="true" />
      </div>

      <div ref={containerRef} className="relative h-full">
        
        <nav className="mx-auto flex items-center justify-start px-6 py-5 bg-transparent" aria-label="Principal">
          <BrandLogo className="text-2xl" />
          <div className="hidden gap-10 sm:flex ml-10">
            <a href="#services" className="story-link text-white">Serviços</a>
            <a href="#about" className="story-link text-white">Sobre nós</a>
            <a href="#location" className="story-link text-white">Como chegar</a>
            <a href="#galeria" className="story-link text-white">Galeria</a>
          </div>
        </nav>

        <div className="grid min-h-[60vh] grid-cols-1 md:min-h-[85vh] md:grid-cols-2 bg-transparent">

          <section className="relative flex items-end text-primary-foreground">
            <div className="container mx-auto px-6 pb-10 pt-12 md:pb-12 md:pt-16">
              <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-sm text-secondary-foreground">
                Aviário e Pet Shop
              </p>
              <h1 className="max-w-3xl font-sans text-4xl font-semibold leading-tight tracking-tight md:text-5xl" data-reveal>
                Cuidando com amor, <br />alimentando com qualidade
              </h1>
              <p className="mt-3 max-w-2xl text-lg opacity-90" data-reveal>
                Tudo para seu pet: rações, vacinas, brinquedos e muito mais.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <Button variant="hero" size="xl" onClick={() => scrollToId("services")}>
                  Ver serviços
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => scrollToId("location")}>
                  Como chegar
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Hero;