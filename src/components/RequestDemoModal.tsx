import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/i18n/LanguageContext";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  hotelName: string;
  email: string;
  phone: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export const RequestDemoModal = ({ isOpen, onClose }: Props) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    hotelName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          hotel_name: formData.hotelName,
          from_email: formData.email,
          phone: formData.phone || "—",
          message: formData.message || "—",
          to_email: "info@orbitastudio.eu",
        },
        PUBLIC_KEY
      );
      setStatus("success");
      successTimerRef.current = setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", hotelName: "", email: "", phone: "", message: "" });
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-border rounded-none px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full max-w-lg bg-background border border-border p-8 md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 gap-4 text-center"
              >
                <CheckCircle size={48} className="text-accent" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-foreground">
                  {t<string>("demo.modal.success")}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {t<string>("demo.modal.successMsg")}
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-accent font-body text-xs tracking-[0.2em] uppercase mb-3">
                  SuitaOne
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  {t<string>("demo.modal.title")}
                </h2>
                <p className="font-body text-muted-foreground text-sm mb-8 leading-relaxed">
                  {t<string>("demo.modal.subtitle")}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t<string>("demo.modal.namePlaceholder")}
                    className={inputClass}
                  />
                  <input
                    name="hotelName"
                    type="text"
                    required
                    value={formData.hotelName}
                    onChange={handleChange}
                    placeholder={t<string>("demo.modal.hotelPlaceholder")}
                    className={inputClass}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t<string>("demo.modal.emailPlaceholder")}
                    className={inputClass}
                  />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t<string>("demo.modal.phonePlaceholder")}
                    className={inputClass}
                  />
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t<string>("demo.modal.messagePlaceholder")}
                    className={inputClass + " resize-none"}
                  />

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {t<string>("demo.modal.sending")}
                      </>
                    ) : (
                      t<string>("demo.modal.submit")
                    )}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-sm font-body text-red-500 text-center">
                      {t<string>("demo.modal.error")}
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
