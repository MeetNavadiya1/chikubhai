import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400/15 to-red-400/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Drip decorations */}
        {[...Array(6)].map((_, i) => (
          <Droplets
            key={i}
            className="absolute text-primary/10 animate-drip"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${20 + i * 4}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-primary mb-4 tracking-wider uppercase"
          >
            Premium Gola Chasani
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight"
          >
            <span className="text-gradient">Always Be</span>
            <br />
            <span className="text-foreground">Juicy</span>
            <span className="text-gradient">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            90+ vibrant flavors of premium gola chasani, crafted with passion.
            Available in 6-liter bulk cans for every baraf gola vendor & distributor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground glow-hover animate-pulse-glow gap-2"
              >
                View Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-primary/30 hover:bg-primary/10 gap-2"
              >
                Bulk Inquiry
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating fruit emojis */}
        <div>
          {[
            { emoji: "🥭", pos: "top-[10%] left-[5%]", size: "text-4xl md:text-5xl lg:text-6xl" },
            { emoji: "🍓", pos: "top-[8%] right-[8%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🍊", pos: "top-[15%] left-[40%]", size: "text-2xl md:text-3xl lg:text-4xl" },
            { emoji: "🍇", pos: "top-[35%] left-[3%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🫐", pos: "top-[30%] right-[5%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🍋", pos: "top-[55%] left-[6%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🍉", pos: "top-[50%] right-[6%]", size: "text-4xl md:text-5xl lg:text-6xl" },
            { emoji: "🍑", pos: "top-[70%] left-[10%]", size: "text-2xl md:text-3xl lg:text-4xl" },
            { emoji: "🥝", pos: "top-[75%] right-[12%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🍍", pos: "top-[85%] left-[35%]", size: "text-3xl md:text-4xl lg:text-5xl" },
            { emoji: "🍒", pos: "top-[18%] right-[30%]", size: "text-2xl md:text-3xl lg:text-4xl" },
            { emoji: "🍌", pos: "top-[80%] right-[35%]", size: "text-2xl md:text-3xl lg:text-4xl" },
          ].map((fruit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              className={`absolute ${fruit.pos} ${fruit.size} animate-float drop-shadow-lg pointer-events-none`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {fruit.emoji}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
