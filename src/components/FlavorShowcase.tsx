import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { flavors, popularFlavors } from "@/data/flavors";
import defaultProduct from '@/assets/default-product.png';

const FlavorShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  const flavorMap = Object.fromEntries(
    flavors.map(f => [f.name, f])
  );

  const showcase = popularFlavors
    .map(popular => {
      const match = flavorMap[popular.name];
      return match
        ? { ...match, video: popular.video }
        : null;
    })
    .filter(Boolean);


  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4 text-foreground">
            Popular <span className="text-gradient">Flavors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A taste for every mood — explore our most loved gola chasani flavors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          {showcase.map((flavor, index) => (
            <div
              key={flavor.name}
              className={`group relative rounded-2xl overflow-hidden flavor-card-hover cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${flavor.color} aspect-[3/4] flex flex-col items-center justify-end p-6 relative overflow-hidden`}
              >

                {/* 🎥 Background Video */}
                <video
                  src={flavor.video} // adjust path if needed
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay to improve readability */}
                {/* <div className="absolute inset-0 bg-black/30" /> */}

                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

                {/* Drip decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-16 bg-white/10 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Description Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm leading-relaxed mb-16 text-center">
                    {flavor.description || "A delicious and refreshing blend crafted for perfection."}
                  </p>
                </div>

                {/* Title + Badge */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 text-center ${flavor.textColor || "text-white"}`}>
                  <p className="font-heading font-bold text-xl md:text-2xl mb-1">
                    {flavor.name}
                  </p>
                  <span className="w-fit place-self-center text-xs font-medium opacity-80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    6L Can
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 bg-primary text-primary-foreground glow-hover"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlavorShowcase;
