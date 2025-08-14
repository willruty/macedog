import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface BrandLogoProps {
  className?: string;
}

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <div className={cn("select-none font-display tracking-tight flex justify-center", className)} aria-label="Macedog">
      <img src={logo} alt="Logo" className="w-20 rounded-lg" />
    </div>
  );
};

export default BrandLogo;
