import BrandLogo from "@/components/BrandLogo";
import { CONTACT, SITE } from "@/config/site";
import { Instagram, Phone, MessageCircleMore, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-secondary/30">
      <div className="container mx-auto grid gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <BrandLogo className="text-2xl md:text-3xl" />
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{SITE.description}</p>
        </div>
        <div>
          <h3 className="font-semibold">Contato</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 text-primary" /><span>{CONTACT.address1}</span></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 text-primary" /><span>{CONTACT.address2}</span></li>
            <li className="flex items-center gap-2"><Phone className="text-primary" /><a href={`tel:${CONTACT.phone}`} className="story-link">{CONTACT.phone}</a></li>
            <li className="flex items-center gap-2"><MessageCircleMore className="text-primary" /><a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" className="story-link">WhatsApp {CONTACT.whatsappDisplay}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Redes sociais</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Instagram className="text-primary" />
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="story-link">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Macedog. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
