import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { useState } from "react";

const contactBackground = `${import.meta.env.BASE_URL}images/contact-background.png`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pmillerschmidt@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={contactBackground}
          alt="Contact Background"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-[20s] hover:scale-110"
          style={{
            filter: "brightness(0.7) contrast(1.1)",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/20" />
        </div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white hero-text bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* About Me and CV Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    About Me
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    From starting a maker space in high school to developing
                    musical toys at Yale, I'm driven to use technology to help
                    people learn through play. Since discovering electronic
                    music production in college, I've been on a mission to build
                    the instruments I wish I'd had growing up. With my
                    background in machine learning, electronic instrument
                    design, and education, I want to create the next generation
                    of instruments and reshape how we learn music.
                  </p>
                </div>
                <div>
                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info and Message Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:pmillerschmidt@gmail.com"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      pmillerschmidt@gmail.com
                    </a>
                    <a
                      href="https://github.com/pmillerschmidt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/paul-miller-schmidt-767370b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    Send Message
                  </h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
