import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Contact Form Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nCompany: ${form.company || "N/A"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@promesa.mv?subject=${subject}&body=${body}`;
    toast({ title: "Opening Email Client", description: "Your default email app will open with the message details." });
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out to discuss how we can support your business." />

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm">Ma. Eynaaz, K. Male'</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Phone</h4>
                    <a href="tel:+9607798858" className="text-muted-foreground text-sm hover:text-gold transition-colors">+960 7798858</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                    <a href="mailto:info@promesa.mv" className="text-muted-foreground text-sm hover:text-gold transition-colors">info@promesa.mv</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a service</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="accounting">Financial Accounting & Reporting</option>
                    <option value="tax">Tax Filing & Compliance</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2.5 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-semibold rounded-md hover:bg-gold-dark transition-colors">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
