import { motion } from "framer-motion";
import { BarChart3, QrCode, ShoppingBag, Settings, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [UtensilsIcon, QrCode, ShoppingBag, Settings, Users];

function UtensilsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

const AdminPanelSection = () => {
  const { t, lang } = useLanguage();
  const nav = t<string[]>("admin.nav");
  const stats = t<{ label: string; value: string }[]>("admin.stats");
  const daysMap: Record<string, string[]> = {
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    hr: ["Pon", "Uto", "Sri", "Čet", "Pet", "Sub", "Ned"],
    sl: ["Pon", "Tor", "Sre", "Čet", "Pet", "Sob", "Ned"],
  };
  const days = daysMap[lang] ?? daysMap.en;
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("admin.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("admin.title")}</h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">{t<string>("admin.desc")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-luxury-elevated overflow-hidden"
        >
          <div className="flex">
            <div className="w-56 bg-muted/50 border-r border-border p-5 hidden md:block">
              <div className="mb-8">
                <span className="font-display text-lg text-foreground">
                  Suita<span className="text-accent">One</span>
                </span>
                <p className="text-[10px] font-body text-muted-foreground mt-1">{t<string>("admin.portal")}</p>
              </div>
              <nav className="space-y-1">
                {nav.map((item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-lg text-xs font-body font-medium cursor-pointer transition-colors ${
                      i === 0 ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex-1 p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="font-body font-semibold text-foreground">{t<string>("admin.overview")}</h4>
                  <p className="text-xs font-body text-muted-foreground">{t<string>("admin.subtitle")}</p>
                </div>
                <div className="btn-accent text-xs py-2 px-4">{t<string>("admin.exportReport")}</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {stats.map((f, i) => {
                  const Icon = icons[i];
                  return (
                    <div key={f.label} className="card-luxury p-4 text-center">
                      <div className="w-8 h-8 mx-auto rounded-lg gradient-champagne flex items-center justify-center mb-2">
                        <Icon className="text-accent" />
                      </div>
                      <p className="font-display text-xl text-foreground">{f.value}</p>
                      <p className="text-[10px] font-body text-muted-foreground mt-1">{f.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-body text-sm font-semibold text-foreground">{t<string>("admin.ordersThisWeek")}</h5>
                  <BarChart3 size={16} strokeWidth={1.5} className="text-muted-foreground" />
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-accent/20 transition-all duration-500" style={{ height: `${h}%` }}>
                        <div className="w-full rounded-t-md bg-accent transition-all duration-500" style={{ height: `${Math.min(h * 0.7, 100)}%` }} />
                      </div>
                      <span className="text-[8px] font-body text-muted-foreground">{days[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPanelSection;
