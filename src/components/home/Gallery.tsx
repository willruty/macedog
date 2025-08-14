import facade from "@/assets/gallery-facade.jpg";
import interior from "@/assets/gallery-interior.jpg";
import dogToy from "@/assets/gallery-dog-toy.jpg";
import catBed from "@/assets/gallery-cat-bed.jpg";

const images = [
  { src: facade, alt: "Fachada acolhedora do pet shop no estilo Ghibli" },
  { src: interior, alt: "Interior com prateleiras e produtos para pets" },
  { src: dogToy, alt: "Cachorro brincando com brinquedo colorido" },
  { src: catBed, alt: "Gato descansando em cama confortável" },
];

const Gallery = () => {
  return (
    <section className="container mx-auto px-6 py-16" aria-labelledby="galeria">
      <div className="mb-6" data-reveal>
        <h2 id="galeria" className="font-display text-3xl md:text-4xl">Galeria</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Momentos que traduzem nosso cuidado e ambiente acolhedor.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img) => (
          <div key={img.alt} className="overflow-hidden rounded-xl" data-reveal>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover hover-scale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
