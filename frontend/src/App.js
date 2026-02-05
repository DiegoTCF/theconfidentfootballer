import { useState, useEffect } from "react";
import "@/App.css";
import { Menu, X, BookOpen, Users, FileText, Star, Quote, ArrowRight, Trophy, Brain, Target, ChevronDown } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";

// Constants
const HERO_BANNER = "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/e8r6n1g9_The%20Confident%20Footballer-8.png";

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
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/v4pmbeyq_WhatsApp%20Image%202025-09-30%20at%2012.27.29.jpg",
    imagePosition: "center"
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
  },
  {
    id: 10,
    player: "Jaxson",
    quote: "Jax's performance has been amazing, and this is down to the fact that since he's been using what he's learned with you and putting that into practice, it's helping him in every aspect.",
    parent: "Daniella Barlow",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/ymoym248_6.png"
  },
  {
    id: 11,
    player: "Zach",
    quote: "Since finishing the programme three months ago, Zach is in a really good place. In his last 15 performances, there has only been one bad day. The behaviours are still the focus, and the father–son relationship is better than ever. We are seeing a level of consistency that wasn't there before.",
    parent: "Mark Hatfull",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/2r1cwr2i_5.png"
  },
  {
    id: 12,
    player: "Leon",
    quote: "You should see him during the game. He was like a Modrić. He was doing everything right. He was real, Leon. Strong, winning tackles, his passing was great, and he wasn't scared of dribble few players.",
    parent: "Bartek Bacik",
    image: "https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/ylz65pcm_WhatsApp%20Image%202025-10-27%20at%2017.24.10%20%281%29.jpeg"
  }
];

// FAQ Data
const FAQ_DATA = [
  {
    question: "What is The Confident Footballer?",
    answer: "The Confident Footballer is a mindset training programme for young footballers designed to help players build confidence, consistency, and emotional control under pressure.\n\nIt is delivered through two pathways: a self-paced online course or a guided individual mentorship, depending on the level of support needed."
  },
  {
    question: "What is the difference between the online course and the Individual Mentorship?",
    answer: "The online course is self-paced and designed for independent learning. It gives players the tools and understanding to start working on their mindset in their own time.\n\nThe Individual Mentorship is a 12-week, one-to-one guided process with Diego. It includes personalised sessions, player support, and parent involvement to create deeper and more consistent change."
  },
  {
    question: "Are the sessions online?",
    answer: "Yes. All sessions are delivered online via Zoom, making them easy to attend from anywhere and fit around school and training schedules."
  },
  {
    question: "Can I book individual sessions?",
    answer: "No. The Individual Mentorship is a structured 12-week process. Confidence and consistency are built over time, which is why one-off sessions are not offered."
  },
  {
    question: "What happens after the 12 weeks?",
    answer: "At the end of the 12 weeks, the initial part of the process comes to a close and we review the progress, changes, and key gains made during the mentorship.\n\nFrom there, different pathways are available for players who choose to continue. Some players transition into ongoing support, and others work with Diego on a longer-term basis depending on their needs and goals."
  },
  {
    question: "Does the online course include one-to-one sessions?",
    answer: "No. The online course is fully self-paced and does not include one-to-one coaching."
  },
  {
    question: "Does the online course include access to the app?",
    answer: "Yes. When you join the online course, you receive access to the full video library and the player app to support learning and reflection."
  },
  {
    question: "How long do I have access to the online course?",
    answer: "You receive 12 months of access to the online course and video library."
  },
  {
    question: "If I join the Individual Mentorship, do I get access to the online platform and apps?",
    answer: "Yes. The Individual Mentorship includes full access to the online course, the player app, and a dedicated Parents App where you can share feedback with Diego and track your child's progress throughout the process."
  },
  {
    question: "What age group is The Confident Footballer for?",
    answer: "The programme is designed for young footballers aged 8 to 18.\n\nThe online course can also be used by younger players when supported by a parent."
  },
  {
    question: "Is this suitable for academy players and grassroots players?",
    answer: "Yes. The principles apply at all levels. Mindset skills such as confidence, focus, and emotional control are essential for every young player."
  },
  {
    question: "Will this help my child if they are confident sometimes?",
    answer: "Yes. Many players feel confident at times. The programme focuses on helping players stay confident when things go wrong, not just when everything is going well."
  },
  {
    question: "Does this replace football coaching or technical training?",
    answer: "No. The Confident Footballer works alongside football coaching. It supports players in expressing their technical ability more consistently under pressure."
  },
  {
    question: "How involved do parents need to be?",
    answer: "Parents are gently involved, especially in the Individual Mentorship. You will receive guidance on how to support your child in a positive way without adding pressure."
  },
  {
    question: "How quickly will we see changes?",
    answer: "Every child is different. Some changes appear early, while others develop gradually. This is why the programme follows a structured process rather than quick fixes."
  },
  {
    question: "Is this therapy or counselling?",
    answer: "No. This is performance mindset training focused on confidence, behaviours, and emotional skills within football."
  },
  {
    question: "Is the discovery call free?",
    answer: "Yes. The discovery call is completely free. After completing the application form, families who are a good fit will be invited to book a call."
  }
];

const DIEGO_IMAGE = "https://images.unsplash.com/photo-1561701202-64e5f6aa443f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjb2FjaCUyMHRhbGtpbmclMjB0byUyMHBsYXllcnxlbnwwfHx8fDE3NzAxMzcwOTF8MA&ixlib=rb-4.1.0&q=85";

// Navigation Component
const Navigation = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Diego", href: "#diego" },
    { name: "FAQ", href: "#faq" }
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

            {/* Mobile Get Started Button */}
            <a
              href="#services"
              className="md:hidden btn-primary text-xs px-4 py-2"
              data-testid="mobile-get-started-top"
            >
              Get Started
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
    <>
      <section className="hero-section flex-col" data-testid="hero-section">
        <div className="relative w-full flex items-center justify-center px-6 py-4 md:py-6">
          <img
            src={HERO_BANNER}
            alt="The Confident Footballer"
            className="hero-banner"
            data-testid="hero-banner"
          />
        </div>
        <div className="pb-6 animate-bounce">
          <a href="#testimonials" className="text-white/60 hover:text-white transition-colors duration-300" data-testid="scroll-indicator">
            <ArrowRight size={24} className="rotate-90" />
          </a>
        </div>
      </section>
      {/* Divider between hero and testimonials */}
      <div className="w-full bg-[#0A0A0A]">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D92323] to-transparent"></div>
      </div>
    </>
  );
};

// About Section
const AboutSection = () => {
  return (
    <>
      {/* Divider between testimonials and about */}
      <div className="w-full bg-white pt-8">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#D92323] to-transparent"></div>
      </div>
      
      <section id="about" className="py-20 md:py-28 px-6 lg:px-12 bg-white relative overflow-hidden" data-testid="about-section">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0A0A0A]" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Building <span className="text-[#D92323]">Confident</span> Footballers
            </h2>
            <div className="red-accent-line mx-auto mt-6"></div>
          </div>

          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              <span className="font-bold text-[#0A0A0A]">The Confident Footballer</span> was created because we understand first-hand what it's like to watch your child hold back on the pitch and not express themselves to their full potential.
            </p>
          </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Problems */}
          <div className="bg-[#0A0A0A] p-8 rounded">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              The frustration of seeing them:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D92323] mt-1">•</span>
                <span>Overthink every decision</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D92323] mt-1">•</span>
                <span>Play it safe instead of showing their ability</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D92323] mt-1">•</span>
                <span>Let one mistake ruin their whole game</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D92323] mt-1">•</span>
                <span>Struggle with match-day nerves</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <span className="text-[#D92323] mt-1">•</span>
                <span>Be brilliant one week, invisible the next</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Solutions */}
          <div className="bg-[#D92323] p-8 rounded">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              At The Confident Footballer, we help your child:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#0A0A0A] mt-1">✓</span>
                <span>Play with genuine self-belief</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#0A0A0A] mt-1">✓</span>
                <span>Recover from mistakes in seconds</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#0A0A0A] mt-1">✓</span>
                <span>Perform consistently</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#0A0A0A] mt-1">✓</span>
                <span>Handle pressure with composure</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="text-[#0A0A0A] mt-1">✓</span>
                <span>Love the game again</span>
              </li>
            </ul>
          </div>
        </div>

        {/* The Truth Section */}
        <div className="text-center mt-12 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4 uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            The truth?
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            <span className="font-bold text-[#0A0A0A]">Talent alone isn't enough.</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            The players who progress are the ones who can handle pressure, bounce back, and believe in themselves.
          </p>
        </div>

        {/* Tagline and CTA */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-[#D92323] mb-8 uppercase tracking-wide" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Practical tools. Proven techniques. Real results.
          </p>
          <a 
            href="#services" 
            className="btn-primary inline-flex items-center gap-2"
            data-testid="about-cta"
          >
            Explore Our Services <ArrowRight size={18} />
          </a>
        </div>
      </div>
      </section>
    </>
  );
};

// Services Section
const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <section id="services" className="py-20 md:py-28 px-6 lg:px-12 bg-[#0A0A0A]" data-testid="services-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-[#D92323] mb-4 block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Our Programmes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            The <span className="text-[#D92323]">Confident Footballer</span> Programmes
          </h2>
          <div className="red-accent-line mx-auto"></div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Online Course */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" data-testid="service-card-online-course">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/ku0z2mer_MODULES%20COVER-4.png"
                alt="Online Course"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                The Confident Footballer – Online Course
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                A self-paced mindset training programme for young footballers and their parents, designed to build confidence, consistency, and emotional control.
              </p>
              
              {expandedService === 'course' && (
                <div className="text-gray-600 text-sm mb-3 animate-fadeIn">
                  <p className="font-semibold text-[#0A0A0A] mb-2">What's included:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> Over 70 engaging lessons with videos, quizzes, and mindset tools</li>
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> Interactive quizzes and simple assessments</li>
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> Access to the exclusive player app to track progress</li>
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> Bonus workshops with specialist guests</li>
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> Fully accessible on mobile and desktop</li>
                    <li className="flex items-start gap-2"><span className="text-[#D92323]">•</span> One year of access, including all future updates</li>
                  </ul>
                </div>
              )}
              
              <button 
                onClick={() => toggleService('course')}
                className="text-[#D92323] text-sm font-medium flex items-center gap-1 hover:underline mt-auto mb-3"
              >
                {expandedService === 'course' ? 'Show less' : 'See what\'s included'}
                <ChevronDown size={16} className={`transition-transform duration-300 ${expandedService === 'course' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <a 
              href="https://www.youthfootballer.com/offers/FpedL4Pg/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#D92323] text-white text-center py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors duration-300"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              data-testid="service-cta-online-course"
            >
              Start Online Course
            </a>
          </div>

          {/* Individual Mindset Coaching */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" data-testid="service-card-mentorship">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/ankijkat_WhatsApp%20Image%202026-01-08%20at%2017.56.53%20%282%29.jpeg"
                alt="Individual Mindset Coaching"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Individual Mindset Coaching (12 Weeks)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                A 12-week one-to-one mentorship designed for players who need personalised support and guidance.
              </p>
              
              {expandedService === 'mentorship' && (
                <div className="text-gray-600 text-sm mb-3 animate-fadeIn">
                  <p className="mb-2">The programme includes weekly sessions delivered via Zoom, tailored to the player's specific challenges, as well as structured parent involvement to support the journey away from the pitch.</p>
                  <p>This option provides deeper accountability, clarity, and long-term confidence development.</p>
                </div>
              )}
              
              <button 
                onClick={() => toggleService('mentorship')}
                className="text-[#D92323] text-sm font-medium flex items-center gap-1 hover:underline mt-auto mb-3"
              >
                {expandedService === 'mentorship' ? 'Show less' : 'Learn more'}
                <ChevronDown size={16} className={`transition-transform duration-300 ${expandedService === 'mentorship' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <a 
              href="https://forms.gle/f18mTdsL4seLQwcE7"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#D92323] text-white text-center py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors duration-300"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              data-testid="service-cta-mentorship"
            >
              Apply for Individual Mindset Coaching
            </a>
          </div>

          {/* The Ebook */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" data-testid="service-card-ebook">
            <div className="h-48 overflow-hidden bg-[#0A0A0A]">
              <img 
                src="https://customer-assets.emergentagent.com/job_soccer-confidence-2/artifacts/x7qrpwx5_60af534-826-5be3-aa51-f642f86eccb_Handling_Comparisons_with_Other_Players_-_Is_It_Always_Bad_to_Compare_When_and_How_Can_You_Use_Others_as_a_Benchmark-9.webp"
                alt="The Ebook"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Maximum Confidence eBook
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                A practical guide for parents and players, introducing the mindset principles and behaviours used inside The Confident Footballer programme.
              </p>
              
              {expandedService === 'ebook' && (
                <div className="text-gray-600 text-sm mb-3 animate-fadeIn">
                  <p>Ideal for families who want to understand the approach and start supporting their child's confidence in a positive, pressure-free way.</p>
                </div>
              )}
              
              <button 
                onClick={() => toggleService('ebook')}
                className="text-[#D92323] text-sm font-medium flex items-center gap-1 hover:underline mt-auto mb-3"
              >
                {expandedService === 'ebook' ? 'Show less' : 'Learn more'}
                <ChevronDown size={16} className={`transition-transform duration-300 ${expandedService === 'ebook' ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <a 
              href="https://www.youthfootballer.com/offers/vvS23JNp/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#D92323] text-white text-center py-4 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors duration-300"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              data-testid="service-cta-ebook"
            >
              Get the Ebook
            </a>
          </div>
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
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
          {TESTIMONIALS.map((testimonial) => {
            const isExpanded = expandedId === testimonial.id;
            const isLongQuote = testimonial.quote.length > 150;
            
            return (
              <div 
                key={testimonial.id} 
                className="testimonial-split-card group flex-shrink-0 w-72 rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                style={{ backgroundColor: '#0A0A0A' }}
                data-testid={`testimonial-${testimonial.id}`}
                onClick={() => isLongQuote && toggleExpand(testimonial.id)}
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
                <div className="p-5 flex flex-col justify-between transition-all duration-300" style={{ backgroundColor: '#0A0A0A', minHeight: isExpanded ? 'auto' : '180px' }}>
                  <div>
                    <Quote size={20} className="text-[#D92323] mb-2" />
                    <p className={`text-white text-sm leading-relaxed italic ${isExpanded ? '' : 'line-clamp-4'}`}>
                      "{testimonial.quote}"
                    </p>
                    {isLongQuote && (
                      <button 
                        className="text-[#D92323] text-xs mt-2 hover:underline flex items-center gap-1"
                        onClick={(e) => { e.stopPropagation(); toggleExpand(testimonial.id); }}
                        data-testid={`testimonial-expand-${testimonial.id}`}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  <p className="text-sm mt-4">
                    <span className="text-[#D92323] font-bold uppercase tracking-wider" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {testimonial.player}'s parent
                    </span>
                    <span className="text-gray-400 block text-xs mt-1">{testimonial.parent}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// FAQ Section (duplicate removed)

// FAQ Section
const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 px-6 lg:px-12 bg-[#F5F5F5]" data-testid="faq-section">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium tracking-widest uppercase text-[#D92323] mb-4 block" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#0A0A0A] mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            Frequently Asked <span className="text-[#D92323]">Questions</span>
          </h2>
          <div className="red-accent-line mx-auto"></div>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-300 bg-white mb-2 px-6 rounded"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-bold text-[#0A0A0A] hover:text-[#D92323] hover:no-underline py-5" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.1rem' }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
              <li><a href="#faq" className="text-gray-400 hover:text-[#D92323] transition-colors duration-300 text-sm">FAQ</a></li>
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
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
