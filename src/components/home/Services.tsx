import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bone, Syringe, Bed, HeartHandshake } from "lucide-react";
import foodImg from "@/assets/service-food.jpg";
import vaccineImg from "@/assets/service-vaccine.jpg";
import toysImg from "@/assets/service-toys.jpg";
import careImg from "@/assets/service-care.jpg";

const services = [
  {
    title: "Rações das melhores marcas",
    desc: "Qualidade e variedade para todas as fases.",
    icon: Bone,
    image: foodImg,
    alt: "Saco de ração e tigela em loja aconchegante",
  },
  {
    title: "Vacinas e vermífugos com orientação",
    desc: "Cuidado responsável para a saúde do seu pet.",
    icon: Syringe,
    image: vaccineImg,
    alt: "Mão segurando seringa perto de cão calmo",
  },
  {
    title: "Brinquedos, camas e acessórios",
    desc: "Conforto e diversão com toque especial.",
    icon: Bed,
    image: toysImg,
    alt: "Cama de pet e brinquedos em prateleira de madeira",
  },
  {
    title: "Atendimento com carinho",
    desc: "Orientação personalizada e afetuosa.",
    icon: HeartHandshake,
    image: careImg,
    alt: "Mão fazendo carinho em gato e cachorro felizes",
  },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <div className="mb-10" data-reveal>
        <h2 className="font-display text-3xl md:text-4xl">Serviços</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Tudo que seu pet precisa com atenção especial.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden" data-reveal>
            <img
              src={s.image}
              alt={s.alt}
              loading="lazy"
              decoding="async"
              className="h-40 w-full object-cover"
            />
            <CardHeader>
              <s.icon className="text-primary" />
              <div className="flex items-center gap-2 text-primary">
                <CardTitle className="text-l">{s.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
