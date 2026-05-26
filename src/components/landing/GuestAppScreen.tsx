import {
  UtensilsCrossed,
  Wine,
  Coffee,
  Sparkles,
  Shirt,
  Bell,
  Info,
  Wifi,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const iconList = [UtensilsCrossed, Wine, Coffee, Sparkles, Shirt, Bell, Info, Wifi];
const colors = [
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
  "bg-orange-50 text-orange-700",
  "bg-emerald-50 text-emerald-700",
  "bg-sky-50 text-sky-700",
  "bg-violet-50 text-violet-700",
  "bg-slate-50 text-slate-600",
  "bg-teal-50 text-teal-700",
];

export const GuestAppScreen = () => {
  const { t } = useLanguage();
  const labels = t<string[]>("guest.app.categories");
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="flex items-center justify-between px-5 pt-10 pb-3">
        <span className="text-[10px] font-body font-medium text-muted-foreground">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-2 bg-foreground rounded-sm" />
        </div>
      </div>

      <div className="px-5 pb-4 border-b border-border">
        <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">The Grand Hotel</p>
        <div className="flex items-center justify-between mt-1">
          <h2 className="font-display text-xl text-foreground">{t<string>("guest.app.welcome")}</h2>
          <span className="text-[10px] font-body font-medium bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
            {t<string>("guest.app.room")}
          </span>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-2.5">
          {iconList.map((Icon, i) => (
            <div
              key={i}
              className="card-luxury p-3 flex flex-col items-start gap-2 cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-8 h-8 rounded-lg ${colors[i]} flex items-center justify-center`}>
                <Icon size={14} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-body font-medium text-foreground">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-around py-3 border-t border-border bg-card">
        <div className="w-5 h-0.5 bg-foreground rounded-full" />
      </div>
    </div>
  );
};
