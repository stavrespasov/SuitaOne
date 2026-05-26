import { motion } from "framer-motion";
import { Plus, ShoppingCart, Check, Clock, ChefHat } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import foodSalmon from "@/assets/food-salmon.jpg";
import foodAvocado from "@/assets/food-avocado.jpg";
import foodChocolate from "@/assets/food-chocolate.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const menuItems = [
  { img: foodSalmon, name: "Grilled Salmon", price: "€34", desc: "Asparagus, herb butter" },
  { img: foodAvocado, name: "Avocado Toast", price: "€18", desc: "Poached eggs, sourdough" },
  { img: foodChocolate, name: "Chocolate Fondant", price: "€16", desc: "Gold leaf, berry coulis" },
];

const RoomServiceSection = () => {
  const { t } = useLanguage();
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
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("room.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">{t<string>("room.title")}</h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">{t<string>("room.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Phone */}
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
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{t<string>("room.eyebrow")}</p>
                  <h3 className="font-display text-lg text-foreground mt-1">{t<string>("room.menu")}</h3>
                </div>
                <div className="flex-1 px-4 py-2 space-y-3 overflow-hidden">
                  {menuItems.map((item) => (
                    <div key={item.name} className="card-luxury overflow-hidden flex gap-3">
                      <img src={item.img} alt={item.name} className="w-20 h-20 object-cover" />
                      <div className="flex-1 py-2 pr-3 flex flex-col justify-between">
                        <div>
                          <p className="font-body text-xs font-semibold text-foreground">{item.name}</p>
                          <p className="font-body text-[10px] text-muted-foreground">{item.desc}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-body text-xs font-semibold text-foreground">{item.price}</span>
                          <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center cursor-pointer">
                            <Plus size={12} strokeWidth={2} className="text-background" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-4 mb-4 btn-accent rounded-xl py-3 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={14} strokeWidth={1.5} />
                    <span className="text-xs font-body font-medium">2 {t<string>("room.items")}</span>
                  </div>
                  <span className="text-xs font-body font-semibold">€52.00</span>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          {/* Checkout Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full flex flex-col bg-background">
                <div className="px-5 pt-10 pb-3">
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{t<string>("room.checkout")}</p>
                  <h3 className="font-display text-lg text-foreground mt-1">{t<string>("room.yourOrder")}</h3>
                </div>
                <div className="flex-1 px-4 py-3 space-y-4">
                  <div className="card-luxury p-4 space-y-3">
                    <div className="flex justify-between text-xs font-body">
                      <span className="text-foreground font-medium">Grilled Salmon</span>
                      <span className="text-foreground">€34</span>
                    </div>
                    <div className="flex justify-between text-xs font-body">
                      <span className="text-foreground font-medium">Avocado Toast</span>
                      <span className="text-foreground">€18</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-xs font-body font-semibold">
                      <span className="text-foreground">{t<string>("room.total")}</span>
                      <span className="text-foreground">€52.00</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-body text-muted-foreground tracking-wider uppercase">{t<string>("room.paymentMethod")}</p>
                    <div className="card-luxury p-3 flex items-center gap-3 border-accent border-2">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                      <span className="text-xs font-body font-medium text-foreground">{t<string>("room.chargeRoom")}</span>
                    </div>
                    <div className="card-luxury p-3 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-border" />
                      <span className="text-xs font-body font-medium text-foreground">{t<string>("room.payCard")}</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="btn-primary w-full justify-center rounded-xl py-3 text-xs">
                    {t<string>("room.placeOrder")}
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>

          {/* Order Status Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <PhoneMockup>
              <div className="h-full flex flex-col bg-background">
                <div className="px-5 pt-10 pb-3">
                  <p className="text-[10px] text-muted-foreground font-body tracking-wider uppercase">{t<string>("room.orderStatus")}</p>
                  <h3 className="font-display text-lg text-foreground mt-1">{t<string>("room.tracking")}</h3>
                </div>
                <div className="flex-1 px-5 py-6">
                  <div className="space-y-0">
                    {[
                      { icon: Check, label: t<string>("room.received"), time: "9:42 AM", done: true },
                      { icon: ChefHat, label: t<string>("room.preparing"), time: "9:45 AM", done: true },
                      { icon: Clock, label: t<string>("room.onWay"), time: `${t<string>("room.est")} 10:00 AM`, done: false },
                    ].map((step, i) => (
                      <div key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.done ? "bg-success/10" : "bg-muted"}`}>
                            <step.icon size={14} strokeWidth={1.5} className={step.done ? "text-success" : "text-muted-foreground"} />
                          </div>
                          {i < 2 && <div className={`w-px h-12 ${step.done ? "bg-success/30" : "bg-border"}`} />}
                        </div>
                        <div className="pt-1">
                          <p className={`text-xs font-body font-medium ${step.done ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                          <p className="text-[10px] font-body text-muted-foreground mt-0.5">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 card-luxury p-4">
                    <p className="text-[10px] font-body text-muted-foreground mb-2">{t<string>("room.estDelivery")}</p>
                    <p className="font-display text-2xl text-foreground">~18 min</p>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoomServiceSection;
