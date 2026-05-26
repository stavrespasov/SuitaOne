import { motion } from "framer-motion";
import { Car, Plane, UtensilsCrossed, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Car, Plane, UtensilsCrossed, MapPin, Clock];

const ConciergeSection = () => {
  const { t } = useLanguage();
  const services = t<{ label: string; desc: string }[]>("concierge.services");
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("concierge.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("concierge.title")}</h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">{t<string>("concierge.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-luxury p-6 hover:shadow-lg transition-all duration-500 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl gradient-champagne flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={20} strokeWidth={1.5} className="text-accent" />
                </div>
                <h4 className="font-body font-semibold text-foreground text-sm mb-1">{s.label}</h4>
                <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConciergeSection;
