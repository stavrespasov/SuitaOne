import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-hotel.jpg";
import { PhoneMockup } from "./PhoneMockup";
import { GuestAppScreen } from "./GuestAppScreen";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img src={heroImage} alt="Luxury hotel suite" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      <motion.div className="relative z-10 section-padding w-full max-w-7xl mx-auto" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-6"
            >
              {t<string>("hero.eyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6"
            >
              {t<string>("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary-foreground/70 text-lg md:text-xl font-body font-light leading-relaxed mb-10 max-w-lg"
            >
              {t<string>("hero.desc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#guest-experience" className="btn-primary">
                {t<string>("hero.ctaGuest")}
              </a>
              <a href="#staff-dashboard" className="btn-secondary border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                {t<string>("hero.ctaStaff")}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <div className="animate-float">
              <PhoneMockup>
                <GuestAppScreen />
              </PhoneMockup>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute top-8 left-8 z-20"
      >
        <span className="font-display text-2xl text-primary-foreground tracking-tight">
          Suita<span className="text-accent">One</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 right-8 z-20"
      >
        <LanguageSwitcher variant="dark" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
