import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { GuestAppScreen } from "./GuestAppScreen";
import { useLanguage } from "@/i18n/LanguageContext";

const GuestExperienceSection = () => {
  const { t } = useLanguage();
  const items = t<{ title: string; desc: string }[]>("guest.items");
  return (
    <section id="guest-experience" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("guest.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("guest.title")}</h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">{t<string>("guest.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <GuestAppScreen />
            </PhoneMockup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {items.map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-body font-semibold text-accent">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                  <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestExperienceSection;
