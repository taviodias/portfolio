import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "LP - Pintar Sem Medo",
    description:
      "Landing Page do curso Pintar Sem Medo com responsividade e integração com a Hotmart.",
    image: "/lp_pintar_sem_medo.webp",
    stack: ["React", "Tailwind", "Responsivo"],
    liveUrl: "https://mdias.club/pintar-sem-medo",
    githubUrl: "https://github.com/taviodias/lp-pintar-sem-medo",
  },
  // {
  //   title: "Task Management App",
  //   description:
  //     "Aplicativo de gerenciamento de tarefas com drag-and-drop, colaboração em tempo real e notificações.",
  //   image:
  //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  //   stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   title: "Social Analytics Dashboard",
  //   description:
  //     "Dashboard de analytics para redes sociais com gráficos interativos e relatórios automatizados.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  //   stack: ["React", "D3.js", "Python", "FastAPI"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Projects() {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <Trans
              i18nKey="projects.title"
              components={[<span className="text-gradient" />]}
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                index === 0 && "lg:col-start-2",
                "group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10",
              )}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                      className="px-2 py-1 text-xs rounded-md border text-primary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t("githubButton")}
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="sm" className="w-full" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
