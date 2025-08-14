import { MAPS_URL } from "@/config/site";

const Location = () => {
  return (
    <section id="location" className="container mx-auto px-6 py-16">
      <div className="mb-6" data-reveal>
        <h2 className="font-display text-3xl md:text-4xl">Onde estamos</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Venha nos visitar e traga seu pet para conhecer nossa loja.
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border bg-card" data-reveal>
        <div className="aspect-[16/6] w-full">
          <iframe
            title="Mapa – Macedog"
            src={MAPS_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
        <div className="p-4 text-sm text-muted-foreground">
          Dica: toque e arraste para explorar o mapa. Se preferir, abra pelo Google Maps
          <a className="story-link ml-1 text-primary" href={MAPS_URL.replace("output=embed", "")}
            target="_blank" rel="noreferrer"> aqui</a>.
        </div>
      </div>
    </section>
  );
};

export default Location;
