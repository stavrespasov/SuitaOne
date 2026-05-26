import { motion } from "framer-motion";
import { QrCode, Smartphone, Bell } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [QrCode, Smartphone, Bell];

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const steps = t<{ title: string; desc: string }[]>("how.steps");
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            {t<string>("how.eyebrow")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">{t<string>("how.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-champagne flex items-center justify-center">
                  <Icon size={28} strokeWidth={1.5} className="text-accent" />
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-xs font-body font-medium text-accent tracking-widest uppercase">
                    {t<string>("how.stepLabel")} {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
