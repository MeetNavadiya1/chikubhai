import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Droplets, Package, Award } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="font-heading font-black text-5xl md:text-6xl text-gradient">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { icon: Droplets, value: 90, suffix: "+", label: "Vibrant Flavors" },
  { icon: Package, value: 6, suffix: "L", label: "Bulk Supply Cans" },
  { icon: Award, value: 5, suffix: "+", label: "Years of Trust" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-foreground">
            The <span className="text-gradient">Taste</span> of Gujarat
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Chikubhai Sarbatwala is a trusted name in premium gola chasani manufacturing.
            From the vibrant streets of Ahmedabad, we bring you 90+ authentic flavored syrups
            that make every baraf gola unforgettable. Pure ingredients, bold flavors,
            and unmatched consistency — that's our promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center p-8 rounded-2xl glass-card flavor-card-hover transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-row items-center gap-3">
                  <div className="flex justify-center items-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-medium mt-2 text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
