import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Icons = [
  {
    Icon: Github,
    href: "https://github.com/taviodias",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/in/diasotavio",
    label: "LinkedIn",
  },
  {
    Icon: Mail,
    href: "mailto:otaviodias.dev@gmail.com",
    label: "Email",
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        {/* Greeting */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl text-muted-foreground">Olá! 👋</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Eu sou{" "}
            <span className="text-gradient lg:inline block">Otávio Dias</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Desenvolvedor Fullstack apaixonado por criar experiências digitais
          incríveis. Transformo café em código e ideias em realidade.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {Icons.map(({ Icon, href, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                asChild
              >
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" className="min-w-45 glow-effect" asChild>
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="outline" size="lg" className="min-w-45" asChild>
              <a href="#contato">Fale Comigo</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
