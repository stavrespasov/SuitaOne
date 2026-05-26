import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import spaRoom from "@/assets/spa-room.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const prices = ["€120", "€40", "€95", "€180"];
const timeSlots = ["09:00", "10:30", "12:00", "14:00", "16:00", "18:30"];

const SpaSection = () => {
  const { t } = useLanguage();
  const treatments = t<{ name: string; duration: string }[]>("spa.treatments");
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.07] hidden lg:block">
        <img src={spaRoom} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("spa.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("spa.title")}</h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">{t<string>("spa.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full flex flex-col bg-background">
                <div className="px-5 pt-10 pb-3">
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{t<string>("spa.eyebrow")}</p>
                  <h3 className="font-display text-lg text-foreground mt-1">{t<string>("spa.treatmentsLabel")}</h3>
                </div>

                <div className="flex-1 px-4 py-2 space-y-2 overflow-hidden">
                  {treatments.map((tr, i) => (
                    <div
                      key={tr.name}
                      className={`card-luxury p-3 cursor-pointer transition-all duration-300 ${i === 0 ? "border-accent border-2" : "hover:shadow-md"}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-body text-xs font-semibold text-foreground">{tr.name}</p>
                          <p className="font-body text-[10px] text-muted-foreground mt-0.5">{tr.duration}</p>
                        </div>
                        <span className="font-body text-xs font-semibold text-foreground">{prices[i]}</span>
                      </div>
                    </div>
                  ))}

                  <div className="mt-3">
                    <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase mb-2">{t<string>("spa.selectTime")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {timeSlots.map((tm, i) => (
                        <div
                          key={tm}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-body font-medium cursor-pointer transition-all ${
                            i === 3 ? "bg-foreground text-background" : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {tm}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="btn-accent w-full justify-center rounded-xl py-3 text-xs">
                    {t<string>("spa.confirmBooking")}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={spaRoom} alt="Luxury spa treatment room" className="rounded-2xl w-full object-cover aspect-[4/3]" style={{ boxShadow: "var(--shadow-elevated)" }} />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="card-luxury p-5">
                <p className="font-display text-3xl text-foreground">4</p>
                <p className="text-xs font-body text-muted-foreground mt-1">{t<string>("spa.treatmentTypes")}</p>
              </div>
              <div className="card-luxury p-5">
                <p className="font-display text-3xl text-foreground">12h</p>
                <p className="text-xs font-body text-muted-foreground mt-1">{t<string>("spa.dailyAvailability")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
