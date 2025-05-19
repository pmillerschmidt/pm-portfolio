import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projects } from "../lib/constants";
import { ExternalLink, Loader2 } from "lucide-react";
import { Link } from "wouter";

const projectsInverted = `${import.meta.env.BASE_URL}images/projects-inverted.jpg`;

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const { element, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "500px",
  });

  useEffect(() => {
    if (isIntersecting && !isLoading && visibleProjects < projects.length) {
      setIsLoading(true);
      // Simulate loading delay for smooth transition
      // Reduced delay for faster loading
      setTimeout(() => {
        setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
        setIsLoading(false);
        // Prefetch next set of images
        const nextProjects = projects.slice(
          visibleProjects + 3,
          visibleProjects + 6,
        );
        nextProjects.forEach((project) => {
          const img = new Image();
          img.src = project.image;
        });
      }, 200);
    }
  }, [isIntersecting, isLoading, visibleProjects]);

  const displayedProjects = projects.slice(0, visibleProjects);

  return (
    <section id="projects" className="relative min-h-screen -mt-1">
      <div className="relative w-full h-full">
        {/* Background that covers entire section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={projectsInverted}
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 backdrop-blur-md" />
        </div>

        {/* Content container */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-12">
            <motion.h2
              className="text-4xl font-bold mb-8 text-center text-white hero-text bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Link href={`/projects/${index}`}>
                    <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                      <CardHeader className="p-4">
                        <CardTitle className="text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-white/70">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="relative h-40 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
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
                          {project.technologies.map((tech) => (
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
                  </Link>
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
