import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsapp from '../assets/whatsapp.svg'

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4 text-foreground">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to stock the best gola chasani? Reach out to us directly!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "150ms" }}>
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1 text-foreground">Call Us</h3>
                <p className="text-muted-foreground"><a href="tel:+916359573085">+91 63595 73085</a></p>
                <p className="text-muted-foreground"><a href="tel:+919408971453">+91 94089 71453</a></p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                <img src={whatsapp} alt="Whatsapp Logo" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1 text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground mb-3">Quick response on WhatsApp</p>
                <a href="https://wa.me/916359573085" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full gap-2 px-6">
                    <img src={whatsapp} alt="Whatsapp Logo" />
                    Message Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1 text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  46, Swaminarayan Industrial Park,<br />
                  Kathwada Shingarwa Road,<br />
                  Ahmedabad, India 382430
                </p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "300ms" }}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[350px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6060.977041201816!2d72.6956345413512!3d23.037634257821143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87005fea08a5%3A0x7fb4363784feb4e0!2sChikubhai%20Sarbatwala!5e0!3m2!1sen!2sin!4v1772281685052!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chikubhai Sarbatwala Location"
                className="min-h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
