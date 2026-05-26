import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, Lang } from "@/i18n/translations";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

interface Props {
  variant?: "light" | "dark";
}

export const LanguageSwitcher = ({ variant = "light" }: Props) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isDark = variant === "dark";
  const triggerCls = isDark
    ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
    : "border-border text-foreground hover:bg-muted";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-body font-medium transition-colors ${triggerCls}`}
      >
        <Globe size={14} strokeWidth={1.5} />
        <span className="hidden sm:inline">{current.native}</span>
        <span className="sm:hidden">{current.code.toUpperCase()}</span>
        <ChevronDown size={12} strokeWidth={2} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left text-xs font-body transition-colors ${
                l.code === lang ? "bg-muted text-foreground font-semibold" : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.native}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
