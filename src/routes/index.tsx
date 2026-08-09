import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Leaf, Heart, ShieldCheck, Package, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-spices.jpg";
import logoAsset from "@/assets/perumal-logo.jpeg.asset.json";
import ownerAsset from "@/assets/owner-vinayaga-moorthy.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venkateswara Mills | Authentic South Indian Spice Powders" },
      {
        name: "description",
        content:
          "Venkateswara Mills — traditional homemade South Indian spice powders. Pure, preservative-free Idli Podi, Coriander, Chilly, and Sambar Powder. Order via phone or WhatsApp.",
      },
      { property: "og:title", content: "Venkateswara Mills | Authentic South Indian Spice Powders" },
      {
        property: "og:description",
        content:
          "Traditional homemade South Indian spice powders. Pure, preservative-free, hygienically packed. Order via phone or WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Idli Podi",
    subtitle: "Idli Powder",
    description: "Aromatic gunpowder-style chutney powder — perfect with idlis, dosas, and rice.",
    quantity: "250g",
    price: "₹90",
    color: "bg-spice/15",
  },
  {
    name: "Coriander Powder",
    subtitle: "Dhaniya Powder",
    description: "Freshly ground coriander seeds with a warm, citrusy aroma for everyday curries.",
    quantity: "250g",
    price: "₹70",
    color: "bg-mustard/15",
  },
  {
    name: "Chilly Powder",
    subtitle: "Milagai Thool",
    description: "Vibrant red chillies ground to a fine, fiery powder for bold South Indian flavor.",
    quantity: "250g",
    price: "₹120",
    color: "bg-deep-red/10",
  },
  {
    name: "Sambar Powder",
    subtitle: "Sambar Podi",
    description: "A balanced blend of roasted lentils and spices for rich, aromatic sambar.",
    quantity: "250g",
    price: "₹100",
    color: "bg-terracotta/10",
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "15+ Years of Experience",
    description: "Trusted by families for over a decade with consistent quality and taste.",
  },
  {
    icon: Leaf,
    title: "100% Natural & Preservative-Free",
    description: "Made only with pure ingredients — no artificial colors, flavors, or preservatives.",
  },
  {
    icon: Heart,
    title: "Traditional Homemade Recipe",
    description: "Prepared the old-fashioned way, just like home, for that authentic taste.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienically Packed & Fresh",
    description: "Sealed fresh after preparation to lock in aroma, flavor, and purity.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src={logoAsset.url}
              alt="Lord Venkateswara Perumal — Venkateswara Mills logo"
              className="h-11 w-11 rounded-full border border-mustard/60 object-cover object-top shadow-sm"
            />
            <span className="font-serif text-xl font-semibold text-terracotta sm:text-2xl">
              Venkateswara Mills
            </span>
          </a>


          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:9884299130">
              <Button size="sm" className="ml-3 bg-terracotta text-terracotta-foreground hover:bg-terracotta/90">
                <Phone className="mr-1.5 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-terracotta"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:9884299130" onClick={() => setMobileMenuOpen(false)}>
                <Button className="mt-2 w-full bg-terracotta text-terracotta-foreground hover:bg-terracotta/90">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Traditional South Indian spice powders in brass bowls"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 text-sm font-medium text-terracotta">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              15+ Years of Trusted Experience
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Venkateswara <span className="text-terracotta">Mills</span>
            </h1>
            <p className="mt-4 font-serif text-xl font-medium text-deep-red sm:text-2xl">
              Authentic Homemade Taste, Traditionally Made Since Generations
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pure, preservative-free South Indian spice powders crafted with care and tradition. Experience the
              richness of home-style flavor in every spoonful.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products">
                <Button size="lg" className="bg-terracotta text-terracotta-foreground hover:bg-terracotta/90">
                  View Products
                </Button>
              </a>
              <a href="https://wa.me/919884299130" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-terracotta/30 text-terracotta hover:bg-terracotta/10"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">About Us</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Tradition, Taste & Trust
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Venkateswara Mills is a trusted, home-style maker of pure South Indian spice powders. With over{" "}
                <strong className="text-foreground">15 years of experience</strong>, we continue to serve our
                customers with authentic taste and uncompromising quality. Every batch is prepared using traditional
                homemade recipes, roasted and ground in small quantities to preserve freshness. We believe in keeping
                it pure —
                <strong className="text-foreground"> no preservatives, no artificial colors, no shortcuts</strong>.
              </p>
            </div>

            <div className="order-1 flex flex-col items-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-terracotta/10" />
                <img
                  src={ownerAsset.url}
                  alt="Vinayaga Moorthy, founder of Venkateswara Mills"
                  className="relative h-56 w-56 rounded-full border-4 border-cream object-cover shadow-lg sm:h-64 sm:w-64"
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">Vinayaga Moorthy</h3>
              <p className="text-sm font-medium text-terracotta">Founder & Proprietor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">Our Products</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Authentic Spice Powders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Freshly prepared, hygienically packed, and ready to bring the taste of home to your kitchen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.name}
                className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className={`h-2 ${product.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-mustard px-2.5 py-1 text-sm font-bold text-mustard-foreground">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <Package className="h-4 w-4 text-terracotta" />
                      {product.quantity}
                    </span>
                    <a
                      href="https://wa.me/919884299130?text=Hi,%20I%20would%20like%20to%20order%20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 px-2 text-terracotta hover:bg-terracotta/10 hover:text-terracotta"
                      >
                        Order via WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">Why Choose Us</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Made the Way It Should Be
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-background p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-terracotta/10">
                  <item.icon className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Order Section */}
      <section id="contact" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-terracotta">Order Now</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">To Order, Contact Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We take orders directly over phone or WhatsApp. No online payment — just reach out and we’ll guide you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta/10">
                      <Phone className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">Phone</h3>
                      <p className="mt-1 text-foreground">9884299130</p>
                      <a href="tel:9884299130" className="mt-3 inline-block">
                        <Button size="sm" className="bg-terracotta text-terracotta-foreground hover:bg-terracotta/90">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mustard/20">
                      <MessageCircle className="h-5 w-5 text-spice" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">WhatsApp</h3>
                      <p className="mt-1 text-foreground">9884299130</p>
                      <a
                        href="https://wa.me/919884299130"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-spice/30 text-spice hover:bg-mustard/10"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-deep-red/10">
                      <MapPin className="h-5 w-5 text-deep-red" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">Address</h3>
                      <p className="mt-1 leading-relaxed text-foreground">
                        72, Madras Thiruvallur High Rd, 1st Floor,
                        <br />
                        Padi, TMP Nagar, Mes Colony,
                        <br />
                        Chennai, Tamil Nadu 600050, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                title="Venkateswara Mills location map"
                src="https://www.google.com/maps?q=72+Madras+Thiruvallur+High+Rd,+Padi,+Chennai,+Tamil+Nadu+600050,+India&output=embed"
                className="h-80 w-full border-0 sm:h-96 lg:h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground px-4 py-12 text-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoAsset.url}
                  alt="Lord Venkateswara Perumal — Venkateswara Mills logo"
                  className="h-12 w-12 rounded-full border border-mustard/50 object-cover object-top"
                />
                <h3 className="font-serif text-2xl font-semibold text-cream">Venkateswara Mills</h3>
              </div>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
                Authentic homemade South Indian spice powders. Pure, preservative-free, and traditionally made.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cream">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-cream/70">
                <li>
                  <a href="tel:9884299130" className="transition-colors hover:text-cream">
                    Phone: 9884299130
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919884299130"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    WhatsApp: 9884299130
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cream">Address</h4>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                72, Madras Thiruvallur High Rd, 1st Floor,
                <br />
                Padi, TMP Nagar, Mes Colony,
                <br />
                Chennai, Tamil Nadu 600050, India
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-cream/10 pt-6 text-center text-sm text-cream/60">
            © {currentYear} Venkateswara Mills. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
