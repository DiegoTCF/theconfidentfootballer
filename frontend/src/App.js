import { useState, useEffect } from "react";
import "@/App.css";
import { Menu, X, BookOpen, Users, FileText, Star, Quote, ArrowRight, Trophy, Brain, Target } from "lucide-react";

// Constants
const HERO_BANNER = "https://customer-assets.emergentagent.com/job_31770e76-de7f-4d90-b907-c512e37565a9/artifacts/yqwxs7zq_The%20confident%20footballer%20banner%20design.png";

const SERVICES = [
  {
    id: "online-course",
    title: "Online Course",
    description: "Comprehensive mindset training modules accessible anywhere, anytime. Transform your mental game with our proven techniques.",
    link: "https://www.youthfootballer.com/offers/FpedL4Pg/checkout",
    cta: "Enroll Now",
    icon: BookOpen
  },
  {
    id: "mentorship",
    title: "Individual Mentorship",
    description: "1-on-1 coaching sessions tailored to your specific goals and challenges. Personal guidance for maximum impact.",
    link: "https://forms.gle/f18mTdsL4seLQwcE7",
    cta: "Apply for Mentorship",
    icon: Users
  },
  {
    id: "ebook",
    title: "The Ebook",
    description: "Essential reading for players and parents. The blueprint to building unshakeable confidence on the pitch.",
    link: "https://www.youthfootballer.com/offers/vvS23JNp/checkout",
    cta: "Get the Guide",
    icon: FileText
  }
];

const TESTIMONIALS = [
  {
    id: 0,
    player: "Oliver",
    quote: "The programme has made a real difference to Oliver's game. His focus and mental resilience have improved tremendously.",
    parent: "Garry Jordan",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/x324t1sf_lost%201-0%20to%20ipswich%20%E2%86%92%20ref%20didnt%20give%20a%20foul%20and%20they%20scored%20early.%20%20we%20beat%20wh%202-1%20%E2%86%92%20I%20scored%20%20we%20beat%20palace%201-0%20%E2%86%92%20%20Arsenal%20loss%201-3%20%E2%86%92%20scored%201%20Brentford%201-2%20%E2%86%92.png"
  },
  {
    id: 1,
    player: "Koby",
    quote: "Koby's confidence and ability to manage his emotions has improved significantly since working with Diego. I've seen first hand Diego's ability to get young athletes to focus and develop techniques of being able to overcome setbacks and reset. The past year Koby has developed significantly. He's matured and now expresses his feelings openly. It's been great to work with Diego.",
    parent: "Paul Hanley",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/v4pmbeyq_WhatsApp%20Image%202025-09-30%20at%2012.27.29.jpg"
  },
  {
    id: 2,
    player: "Salih",
    quote: "His mindset is very strong and solid, which made him realize his character.",
    parent: "Bayram Karapinar",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/gxzvtnh4_WhatsApp%20Image%202025-08-12%20at%2016.31.39.jpeg"
  },
  {
    id: 2,
    player: "Isaac",
    quote: "Isaac's confidence has improved considerably. He now believes in himself and can handle the fear of failure better.",
    parent: "Badu",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/otbgseyv_image-5.png"
  },
  {
    id: 3,
    player: "Pedro",
    quote: "Diego has helped Pedro's confidence and resilience to overcome setbacks and challenges since he was 11 years old. Thank you for everything!",
    parent: "Michael Araujo Alves",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/imahmx4a_PHOTO-2025-12-19-10-26-57.jpg"
  },
  {
    id: 4,
    player: "Jude",
    quote: "My son grew in confidence after the sessions with Diego.",
    parent: "Jamie Holloway",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/xpduwds6_The%20Confident%20Footballer-7.png"
  },
  {
    id: 5,
    player: "Ralph",
    quote: "Ralph has tools he can use and refer to. It's helped us as parents know how to help him too.",
    parent: "Becky",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/5a626r70_PHOTO-2025-04-20-09-08-45.jpg"
  },
  {
    id: 6,
    player: "Alasdair",
    quote: "Alasdair's confidence has grown and how he reflects on his focus during games. We've seen a significant change in him.",
    parent: "Craig Burns",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/0f3gcxnt_The%20Confident%20Footballer-5.png"
  },
  {
    id: 7,
    player: "Pedro Victor",
    quote: "Pedro's communication in football has improved a lot.",
    parent: "Glauco Felício",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/fg57y9wh_image.png"
  },
  {
    id: 8,
    player: "Freddie",
    quote: "Working with Diego has been fantastic for Freddie. The pre-match process and post-match feedback are invaluable. The Confident Footballer has become a key part of Freddie's program—one I would highly recommend.",
    parent: "Danny Clarke",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/t45ps1j2_The%20Confident%20Footballer-6.png"
  },
  {
    id: 9,
    player: "Rehaan",
    quote: "Rehaan is in a much more positive mindset compared to where he started, and I can see him asserting himself effectively in trainings and matches.",
    parent: "Rehmat Adenwala",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/tvzvlkdp_WhatsApp%20Image%202025-09-26%20at%2011.22.17.jpg",
    imagePosition: "center"
  }
];

const DIEGO_IMAGE = "https://images.unsplash.com/photo-1561701202-64e5f6aa443f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjb2FjaCUyMHRhbGtpbmclMjB0byUyMHBsYXllcnxlbnwwfHx8fDE3NzAxMzcwOTF8MA&ixlib=rb-4.1.0&q=85";

// Navigation Component
const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Diego", href: "#diego" }
  ];

  return (
    <>
      <nav className={`nav-sticky ${scrolled ? 'scrolled' : ''}`} data-testid="navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center" data-testid="nav-logo">
              <span className="font-bold text-xl md:text-2xl tracking-tight" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                <span className="text-[#0A0A0A]">THE </span>
                <span className="text-[#D92323]">CONFIDENT</span>
                <span className="text-[#0A0A0A]"> FOOTBALLER</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#0A0A0A] hover:text-[#D92323] font-medium transition-colors duration-300 uppercase text-sm tracking-wider"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#services"
                className="btn-primary text-sm"
                data-testid="nav-cta"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} data-testid="mobile-menu">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-menu-close"
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold uppercase tracking-wider hover:text-[#D92323] transition-colors duration-300"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#services"
            className="btn-primary mt-4"
            onClick={() => setMobileMenuOpen(false)}
            data-testid="mobile-nav-cta"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero-section" data-testid="hero-section">
      <div className="relative w-full flex items-center justify-center px-6 py-8 md:py-12">
        <img
          src={HERO_BANNER}
          alt="The Confident Footballer"
          className="hero-banner"
          data-testid="hero-banner"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300" data-testid="scroll-indicator">
          <ArrowRight size={24} className="rotate-90" />
        </a>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-12 bg-white relative overflow-hidden" data-testid="about-section">
      {/* Watermark */}
      <span className="watermark-number absolute -left-10 top-0">01</span>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="relative z-10">
            <span className="text-sm font-medium tracking-widest uppercase text-[#D92323] mb-4 block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              About The Programme
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0A0A0A] mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Build Unshakeable <span className="text-[#D92323]">Confidence</span> on the Pitch
            </h2>
            <div className="red-accent-line mb-6"></div>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              The Confident Footballer is a comprehensive mindset programme designed specifically for young footballers who want to unlock their full potential. We help players develop the mental strength needed to perform under pressure, bounce back from setbacks, and play with courage and consistency.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
              Our proven methodology combines sports psychology principles with practical techniques that young players can apply immediately. Whether your child struggles with pre-match nerves, fear of failure, or inconsistent performances, we have the tools to help them thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary inline-flex items-center justify-center gap-2" data-testid="about-cta">
                Explore Our Services <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#D92323] p-6 text-white">
                  <Trophy size={32} className="mb-4" />
                  <h4 className="font-bold text-xl uppercase mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Confidence</h4>
                  <p className="text-sm opacity-90">Play with self-belief</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1761225092045-698d1c4a9f43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMHRyYWluaW5nfGVufDB8fHx8MTc3MDEzNzA4NXww&ixlib=rb-4.1.0&q=85"
                  alt="Young footballer training"
                  className="w-full h-48 object-cover"
                  data-testid="about-image-1"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1760420919593-c1ae7509faaf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwyfHx5b3VuZyUyMHNvY2NlciUyMHBsYXllciUyMHRyYWluaW5nfGVufDB8fHx8MTc3MDEzNzA4NXww&ixlib=rb-4.1.0&q=85"
                  alt="Focused young player"
                  className="w-full h-48 object-cover"
                  data-testid="about-image-2"
                />
                <div className="bg-[#0A0A0A] p-6 text-white">
                  <Brain size={32} className="mb-4" />
                  <h4 className="font-bold text-xl uppercase mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Mindset</h4>
                  <p className="text-sm opacity-90">Think like a champion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 lg:px-12 bg-[#F5F5F5]" data-testid="services-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-[#D92323] mb-4 block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0A0A0A] mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Choose Your <span className="text-[#D92323]">Path</span> to Success
          </h2>
          <div className="red-accent-line mx-auto"></div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card" data-testid={`service-card-${service.id}`}>
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#D92323]/10 flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-[#D92323]" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-sm w-full justify-center"
                  data-testid={`service-cta-${service.id}`}
                >
                  {service.cta} <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Diego Section
const DiegoSection = () => {
  return (
    <section id="diego" className="py-20 md:py-32 px-6 lg:px-12 bg-white relative overflow-hidden" data-testid="diego-section">
      {/* Watermark */}
      <span className="watermark-number absolute -right-10 top-0">02</span>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative">
              <img
                src={DIEGO_IMAGE}
                alt="Diego - The Confident Footballer founder"
                className="w-full h-[500px] object-cover"
                data-testid="diego-image"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#D92323] p-6 text-white">
                <Target size={32} className="mb-2" />
                <p className="font-bold uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Mindset Specialist</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 order-1 md:order-2">
            <span className="text-sm font-medium tracking-widest uppercase text-[#D92323] mb-4 block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Meet The Specialist
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0A0A0A] mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Diego
            </h2>
            <div className="red-accent-line mb-6"></div>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              Diego is the founder and lead mindset coach at The Confident Footballer. With years of experience working with young athletes, he understands the unique mental challenges that young footballers face.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
              His passion is helping players unlock their potential by developing a winning mindset. Diego combines sports psychology techniques with practical, easy-to-apply strategies that produce real results on the pitch.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
              Whether through the online course, personal mentorship sessions, or his comprehensive ebook, Diego's mission is to help every young player develop the confidence, consistency, and courage they need to succeed.
            </p>
            <a
              href="https://forms.gle/f18mTdsL4seLQwcE7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              data-testid="diego-cta"
            >
              Work With Diego <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Here is what the parents of our <span className="text-[#D92323]">Confident Footballers</span> are saying:
          </h2>
          <div className="red-accent-line mx-auto"></div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-6 px-6 lg:px-12" style={{ width: 'max-content' }}>
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-split-card group flex-shrink-0 w-72 rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: '#0A0A0A' }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Photo Section - No Overlay */}
              <div className="relative h-56 overflow-hidden bg-[#0A0A0A]">
                <img
                  src={testimonial.image}
                  alt={testimonial.player}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${testimonial.imagePosition === 'center' ? 'object-center' : 'object-top'}`}
                />
              </div>
              
              {/* Quote Section */}
              <div className="p-5 min-h-[180px] flex flex-col justify-between" style={{ backgroundColor: '#0A0A0A' }}>
                <div>
                  <Quote size={20} className="text-[#D92323] mb-2" />
                  <p className="text-white text-sm leading-relaxed italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <p className="text-sm mt-4">
                  <span className="text-[#D92323] font-bold uppercase tracking-wider" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    {testimonial.player}'s parent
                  </span>
                  <span className="text-gray-400 block text-xs mt-1">{testimonial.parent}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  return (
    <footer className="footer py-12 px-6 lg:px-12" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-2xl tracking-tight mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              <span className="text-white">THE </span>
              <span className="text-[#D92323]">CONFIDENT</span>
              <span className="text-white"> FOOTBALLER</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping young players play with confidence, consistency, and courage under pressure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg uppercase mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm">Testimonials</a></li>
              <li><a href="#diego" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm">Meet Diego</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg uppercase mb-4 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.youthfootballer.com/offers/FpedL4Pg/checkout" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm" data-testid="footer-online-course">
                  Online Course
                </a>
              </li>
              <li>
                <a href="https://forms.gle/f18mTdsL4seLQwcE7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm" data-testid="footer-mentorship">
                  Individual Mentorship
                </a>
              </li>
              <li>
                <a href="https://www.youthfootballer.com/offers/vvS23JNp/checkout" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm" data-testid="footer-ebook">
                  The Ebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Confident Footballer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ServicesSection />
      <DiegoSection />
      <Footer />
    </div>
  );
}

export default App;
