import React from 'react';
import { Menu, X, Instagram, Twitter, Linkedin, Mail, ChevronDown, ExternalLink, Palette, Layout, Package } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu after clicking
      }
    }
  };

  const projects = [
    {
      title: "Brand Identity - Eco Foods",
      description: "Complete brand identity design for an organic food company",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&w=1374&q=80",
      tags: ["Branding", "Logo Design", "Typography"],
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: "Digital Campaign - Tech Innovate",
      description: "Social media campaign design for a tech startup",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
      tags: ["Digital", "Social Media", "Campaign"],
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: "Package Design - Artisan Coffee",
      description: "Premium coffee packaging design series",
      image: "https://images.unsplash.com/photo-1612487528505-d2338264c821?auto=format&fit=crop&w=1470&q=80",
      tags: ["Packaging", "Product Design"],
      icon: <Package className="w-6 h-6" />
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full floating-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="text-3xl font-bold text-purple-500">
              Sarah.Design
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#work" onClick={handleNavClick} className="text-gray-300 hover:text-purple-500 font-medium">Work</a>
              <a href="#about" onClick={handleNavClick} className="text-gray-300 hover:text-purple-500 font-medium">About</a>
              <a href="#contact" onClick={handleNavClick} className="text-gray-300 hover:text-purple-500 font-medium">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#work" onClick={handleNavClick} className="block px-3 py-2 text-gray-300 hover:text-purple-500 font-medium">Work</a>
              <a href="#about" onClick={handleNavClick} className="block px-3 py-2 text-gray-300 hover:text-purple-500 font-medium">About</a>
              <a href="#contact" onClick={handleNavClick} className="block px-3 py-2 text-gray-300 hover:text-purple-500 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="hero-text">
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 leading-none">
              Design<span className="text-purple-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Sarah. I transform ideas into compelling visual narratives
              that captivate and inspire.
            </p>
            <a 
              href="#work" 
              onClick={handleNavClick}
              className="inline-flex items-center text-purple-500 hover:text-purple-400 text-lg font-medium"
            >
              View My Work <ChevronDown className="ml-2 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 diagonal-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-24 text-center">
            <span className="text-purple-500">Selected</span> Work
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {projects.map((project, index) => (
              <div key={index} className="project-card bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[300px] object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-500">{project.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-sm bg-purple-500/10 text-purple-400 rounded-full px-4 py-1 font-medium border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-8">
                About <span className="text-purple-500">Me</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                With over 8 years of experience in graphic design, I specialize in creating
                meaningful brand identities and digital experiences. My approach combines
                strategic thinking with creative execution to deliver designs that not only
                look beautiful but also achieve business objectives.
              </p>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                I've had the privilege of working with clients ranging from startups to
                established brands, helping them stand out in their respective markets
                through thoughtful design solutions.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="social-icon text-purple-500 hover:text-purple-400">
                  <Instagram size={28} />
                </a>
                <a href="#" className="social-icon text-purple-500 hover:text-purple-400">
                  <Twitter size={28} />
                </a>
                <a href="#" className="social-icon text-purple-500 hover:text-purple-400">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="project-card overflow-hidden rounded-xl border border-purple-500/20 relative">
                <div className="absolute inset-0 bg-purple-500/10 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1469&q=80"
                  alt="Designer working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Let's Work <span className="text-purple-500">Together</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              I'm always interested in hearing about new projects and opportunities.
              Let's create something extraordinary together.
            </p>
            <a 
              href="mailto:hello@sarah.design" 
              className="contact-button inline-flex items-center bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors text-lg font-medium"
            >
              <Mail className="mr-3" /> Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© 2024 Sarah.Design. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-purple-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;