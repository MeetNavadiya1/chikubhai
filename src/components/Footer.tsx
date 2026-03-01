import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/chikubhai_logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground/[0.03] border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Chikubhai Sarbatwala" className="h-12 w-auto rounded-lg" />
              <span className="font-heading font-bold text-lg text-foreground">
                Chikubhai Sarbatwala
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premium gola chasani manufacturer from Ahmedabad. 90+ vibrant flavors in 6 liter bulk cans.
            </p>
            <a
              href="https://www.instagram.com/chikubhai_sharbatwala/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Instagram className="h-5 w-5" />
              Follow us on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground"><a href="tel:+916359573085">+91 63595 73085</a></p>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground"><a href="tel:+919408971453">+91 94089 71453</a></p>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                46, Swaminarayan Industrial Park, Kathwada Shingarwa Road, Ahmedabad 382430
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Chikubhai Sarbatwala. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
