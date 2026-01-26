import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("translation", { keyPrefix: "footer" });
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 px-6 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            © {currentYear} Otávio Dias Dev. {t("rights")}
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Trans
              i18nKey="footer.madeWith"
              components={[
                <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />,
              ]}
            />
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
