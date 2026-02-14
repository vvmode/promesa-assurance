import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/team" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Audit & Assurance", path: "/services/audit" },
      { label: "Financial Accounting & Reporting", path: "/services/accounting" },
      { label: "Tax Filing & Compliance", path: "/services/tax" },
      { label: "Local Councils", path: "/local-councils" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Promesa Audit & Assurance LLP" className="h-20 w-auto object-contain" style={{maxHeight: '100%'}} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md
                    ${location.pathname.startsWith("/services") ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-72 bg-card rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-muted hover:text-accent-foreground transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md
                  ${isActive(link.path) ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-navy-light/30 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-primary-foreground/80"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm text-primary-foreground/60 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors
                    ${isActive(link.path) ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
