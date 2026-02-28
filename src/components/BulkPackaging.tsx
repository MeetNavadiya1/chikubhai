import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Package, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsapp from '../assets/whatsapp.svg'

const BulkPackaging = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-[2px] rounded-3xl">
            <div className="bg-background rounded-3xl p-8 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-medium">
                    <Package className="h-4 w-4" />
                    Bulk Packaging
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-foreground leading-tight">
                    6-Liter <span className="text-gradient">Premium</span> Cans
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Designed for distributors, wholesalers, and gola vendors. 
                    Our 6-liter cans are the perfect size for high-volume businesses — 
                    cost-effective, long-lasting, and available in all 90+ flavors.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Wholesale & distributor pricing",
                      "All 90+ flavors available in bulk",
                      "Fast delivery across Gujarat",
                      "Consistent quality in every can",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="https://wa.me/916359573085?text=Hi!%20I%27m%20interested%20in%20bulk%20ordering%20gola%20chasani." target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-full px-8 gap-2 bg-green-500 hover:bg-green-600 text-white glow-hover">
                      <img src={whatsapp} alt="Whatsapp Logo" />
                      Inquire on WhatsApp
                    </Button>
                  </a>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <Package className="h-24 w-24 text-primary/40 mx-auto mb-4" />
                        <p className="font-heading font-bold text-6xl text-gradient">6L</p>
                        <p className="text-muted-foreground font-medium mt-2">Premium Can</p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold animate-float shadow-xl">
                      <span className="text-xs text-center leading-tight">90+<br/>Flavors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkPackaging;
