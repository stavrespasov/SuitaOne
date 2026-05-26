import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-6">{t<string>("cta.eyebrow")}</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
            {t<string>("cta.title")}
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
            {t<string>("cta.desc")}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-base px-10 py-5"
          >
            {t<string>("common.requestDemo")}
            <ArrowRight size={18} strokeWidth={1.5} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="font-display text-xl text-foreground">
            Suita<span className="text-accent">One</span>
          </span>
          <p className="text-xs font-body text-muted-foreground">{t<string>("cta.footer")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
