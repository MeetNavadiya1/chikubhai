import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Package, Truck, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "High Quality Ingredients",
    description: "Every syrup is crafted with premium, food grade ingredients for the purest taste experience.",
    gradient: "from-yellow-400/20 to-orange-400/20",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "From gujarat to pan india, we supply premium sugar syrups to every corner of India.",
    gradient: "from-pink-400/20 to-rose-400/20",
  },
  {
    icon: Package,
    title: "Bulk Supply Ready",
    description: "6-liter cans designed for vendors, distributors, and high volume businesses.",
    gradient: "from-blue-400/20 to-indigo-400/20",
  },
  {
    icon: Palette,
    title: "Wide Flavor Range",
    description: "90+ unique flavors from traditional Indian to exciting fusion blends.",
    gradient: "from-purple-400/20 to-violet-400/20",
  },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4 text-foreground">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by gola vendors and distributors across Gujarat
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-card rounded-2xl p-7 group flavor-card-hover transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
