import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, Lang } from "@/i18n/translations";
import { useState } from "react";
import { Check } from "lucide-react";

export const LanguageModal = () => {
  const { lang, setLang, hasChosen, setHasChosen, t } = useLanguage();
  const [selected, setSelected] = useState<Lang>(lang);

  const handleContinue = () => {
    setLang(selected);
    setHasChosen(true);
  };

  return (
    <AnimatePresence>
      {!hasChosen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background rounded-2xl max-w-md w-full p-8 md:p-10"
            style={{ boxShadow: "var(--shadow-elevated, 0 30px 80px -20px rgba(0,0,0,0.4))" }}
          >
            <div className="text-center mb-8">
              <span className="font-display text-2xl text-foreground tracking-tight">
                Suita<span className="text-accent">One</span>
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-6 mb-2">
                {t<string>("language.title")}
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                {t<string>("language.subtitle")}
              </p>
            </div>

            <div className="space-y-2 mb-8">
              {LANGUAGES.map((l) => {
                const active = selected === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => setSelected(l.code)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-300 ${
                      active
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{l.flag}</span>
                      <div className="text-left">
                        <p className="font-body text-sm font-semibold text-foreground">{l.native}</p>
                        <p className="font-body text-xs text-muted-foreground">{l.label}</p>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        active ? "bg-accent" : "border-2 border-border"
                      }`}
                    >
                      {active && <Check size={12} strokeWidth={3} className="text-background" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <button onClick={handleContinue} className="btn-primary w-full justify-center">
              {t<string>("language.continue")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
