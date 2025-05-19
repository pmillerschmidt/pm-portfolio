import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { musicProjects } from "../lib/constants";
import { ExternalLink, Loader2 } from "lucide-react";
import { Link as WouterLink } from "wouter";

const musicBackground = `${import.meta.env.BASE_URL}images/music-background.png`;

export function Music() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const { element, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '500px',
  });

  useEffect(() => {
    if (isIntersecting && !isLoading && visibleProjects < musicProjects.length) {
      setIsLoading(true);
      // Simulate loading delay for smooth transition
      // Reduced delay for faster loading
      setTimeout(() => {
        setVisibleProjects((prev) => Math.min(prev + 3, musicProjects.length));
        setIsLoading(false);
        // Prefetch next set of images
        const nextProjects = musicProjects.slice(visibleProjects + 3, visibleProjects + 6);
        nextProjects.forEach(project => {
          const img = new Image();
          img.src = project.image;
        });
      }, 200);
    }
  }, [isIntersecting, isLoading, visibleProjects]);

  return (
    <section id="music" className="relative py-4 min-h-screen flex items-center -mt-24">
      <div className="absolute inset-0 z-0">
        <img
          src={musicBackground}
          alt="Music Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 backdrop-blur-md" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white hero-text bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Music & Sound
        </motion.h2>

        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {musicProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <WouterLink href={`/music/${index}`}>
                    <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-white/70">
                          {project.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-48 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-medium flex items-center">
                              View Details
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </WouterLink>
                </motion.div>
              ))}
            </div>

            {/* Loading indicator and intersection observer target */}
            <div ref={element} className="w-full py-8 flex justify-center">
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Loader2 className="w-6 h-6 text-white animate-spin" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}