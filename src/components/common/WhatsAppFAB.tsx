import { CONTACT } from "@/config/site";
import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-whatsapp-foreground shadow-elegant hover:brightness-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFAB;
