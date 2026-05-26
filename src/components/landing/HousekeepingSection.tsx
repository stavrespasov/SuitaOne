import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const emojis = ["🛁", "🛏️", "✨", "🧻", "👔"];

const HousekeepingSection = () => {
  const { t } = useLanguage();
  const services = t<string[]>("house.services");
  const features = t<string[]>("house.features");
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("house.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("house.title")}</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8 max-w-md">{t<string>("house.desc")}</p>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                    <Check size={12} strokeWidth={2} className="text-success" />
                  </div>
                  <span className="font-body text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full flex flex-col bg-background">
                <div className="px-5 pt-10 pb-3">
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{t<string>("house.eyebrow")}</p>
                  <h3 className="font-display text-lg text-foreground mt-1">{t<string>("house.requestService")}</h3>
                </div>
                <div className="flex-1 px-4 py-3 space-y-2">
                  {services.map((s, i) => (
                    <div key={s} className="card-luxury p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{emojis[i]}</span>
                        <span className="font-body text-xs font-medium text-foreground">{s}</span>
                      </div>
                      <div className="w-5 h-5 rounded-md border-2 border-border" />
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4">
                  <div className="btn-primary w-full justify-center rounded-xl py-3 text-xs">
                    {t<string>("house.sendRequest")}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HousekeepingSection;
