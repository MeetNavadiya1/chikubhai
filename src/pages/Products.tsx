import { useState } from "react";
import { MessageCircle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { flavors, categories, type FlavorCategory } from "@/data/flavors";
import whatsapp from '../assets/whatsapp.svg'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | FlavorCategory>("All");
  const { ref, isVisible } = useScrollAnimation();

  const filtered = activeCategory === "All"
    ? flavors
    : flavors.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div ref={ref} className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="font-heading font-black text-4xl md:text-6xl mb-4 text-foreground">
              Our <span className="text-gradient">Flavors</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              90+ premium gola chasani flavors — all available in 6-liter bulk cans
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Flavor Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 mb-16">
            {filtered.map((flavor, index) => (
              <figure
                key={flavor.name}
                className="group rounded-2xl overflow-hidden flavor-card-hover cursor-pointer border border-border/40 shadow-md bg-card mx-auto w-full max-w-[230px]"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Increased Height Image Section */}
                <div className="h-55 flex items-center justify-center">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Description */}
                <div className={`${flavor.color} opacity-80 p-4 pt-5 space-y-2 bg-muted/50`}>
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-foreground leading-tight">
                      {flavor.name}
                    </h3>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full shrink-0">
                      <Droplets className="h-3 w-3" />
                      6L Pack
                    </span>
                  </div>
                  <figcaption className="text-muted-foreground text-sm text-black leading-relaxed line-clamp-2">
                    {flavor.description}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* Bulk CTA */}
          <div className="text-center glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4 text-foreground">
              Interested in <span className="text-gradient">Bulk Orders</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              We offer wholesale and distributor pricing. Contact us on WhatsApp for inquiries.
            </p>
            <a href="https://wa.me/919876543210?text=Hi!%20I%27d%20like%20to%20inquire%20about%20bulk%20ordering." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full px-8 gap-2 bg-green-500 hover:bg-green-600 text-white glow-hover">
                <img src={whatsapp} alt="Whatsapp Logo" />
                Bulk Order Inquiry
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
