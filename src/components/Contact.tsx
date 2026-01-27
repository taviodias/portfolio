import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Trans, useTranslation } from "react-i18next";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/taviodias",
    username: "@taviodias",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/diasotavio",
    username: "diasotavio",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/taviodias",
    username: "@taviodias",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/otaviodias.s",
    username: "@otaviodias.s",
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

const email = "otaviodias.dev@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation("translation", { keyPrefix: "contact" });

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast(t("toast.copySuccess"), {
      description: t("toast.copyMessage"),
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
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
              i18nKey="contact.title"
              components={[<span className="text-gradient" />]}
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Email Card */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-2 rounded-lg text-primary"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="h-5 w-5" />
              </motion.div>
              <h3 className="font-semibold">Email</h3>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-muted-foreground flex-1">{email}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="shrink-0"
                  aria-label="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="p-2 rounded-lg text-primary"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MapPin className="h-5 w-5" />
              </motion.div>
              <h3 className="font-semibold">{t("card.location")}</h3>
            </div>
            <p className="text-muted-foreground">Brasília, DF 🇧🇷</p>
            <p className="text-sm text-muted-foreground mt-1">
              {t("card.remote")}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 lg:col-span-2"
            variants={itemVariants}
          >
            <h3 className="font-semibold mb-4">{t("card.social")}</h3>
            <div className="flex flex-col lg:flex-row gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group grow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">{social.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
