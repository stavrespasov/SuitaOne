import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang, TranslationNode } from "./translations";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  hasChosen: boolean;
  setHasChosen: (v: boolean) => void;
  t: (key: string) => TranslationNode;
}

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "suitaone.lang";
const CHOSEN_KEY = "suitaone.lang.chosen";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem(STORAGE_KEY) as Lang) || "en";
  });
  const [hasChosen, setHasChosenState] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(CHOSEN_KEY) === "1";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };
  const setHasChosen = (v: boolean) => {
    setHasChosenState(v);
    localStorage.setItem(CHOSEN_KEY, v ? "1" : "0");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const resolvePath = (root: TranslationNode, path: string[]): TranslationNode | undefined => {
    let current: TranslationNode = root;
    for (const segment of path) {
      if (typeof current !== "object" || current === null || Array.isArray(current)) {
        return undefined;
      }
      const record = current as Record<string, TranslationNode>;
      current = record[segment];
      if (current === undefined) {
        return undefined;
      }
    }
    return current;
  };

  const t = (key: string): TranslationNode => {
    const parts = key.split(".");
    const resolved = resolvePath(translations[lang], parts);
    if (resolved !== undefined) {
      return resolved;
    }

    const fallback = resolvePath(translations.en, parts);
    return fallback ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, hasChosen, setHasChosen, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
