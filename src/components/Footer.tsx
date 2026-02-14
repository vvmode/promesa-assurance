import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Promesa Audit & Assurance LLP" className="h-16 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A promise of integrity and assurance. Your trusted financial partner in the Maldives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Team", path: "/team" },
                { label: "Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services/audit" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Audit & Assurance</Link>
              <Link to="/services/accounting" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Financial Accounting</Link>
              <Link to="/services/tax" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">Tax Filing & Compliance</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/70">Malé, Maldives</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/70">+960 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/70">info@promesa.mv</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light/30 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Promesa Audit & Assurance LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
