import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Svelte"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "PHP", "REST APIs"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "DevOps",
    icon: Globe,
    items: ["Docker", "AWS", "CI/CD", "Git", "Github"],
  },
  {
    category: "Ferramentas",
    icon: Code2,
    items: ["VS Code", "Figma", "Insomnia", "Linux", "Windows"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
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
            Skills & <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que uso para transformar ideias em
            produtos digitais
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 rounded-lg text-primary"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <skill.icon className="h-5 w-5" />
                </motion.div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground transition-colors duration-200 hover:bg-primary cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
