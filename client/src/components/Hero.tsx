import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const projectsBackground = `${import.meta.env.BASE_URL}images/projects-background.png`;

export function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={projectsBackground}
          alt="Creative Technology Background"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-[20s] hover:scale-110"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="eager"
          style={{
            filter: "brightness(0.7) contrast(1.1)",
            willChange: "transform",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/20" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
          <span className="hero-text bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] animate-gradient">
            Paul Miller-Schmidt
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
        Musician | ML Engineer | Educator
        </p>
        <div className="flex justify-center">
          <Button
            className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            size="lg"
            onClick={scrollToProjects}
          >
            <span>View My Work</span>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 inline-flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}