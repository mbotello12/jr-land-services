
import { Phone } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-forest px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden">
      <a
        href="tel:3613182522"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-tan px-5 py-3 font-bold text-espresso shadow-lg transition active:scale-[0.98]"
      >
        <Phone size={18} />
        Call for a Free Estimate
      </a>
    </div>
  );
}
