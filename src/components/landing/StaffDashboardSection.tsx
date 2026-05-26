import { motion } from "framer-motion";
import { TabletMockup } from "./PhoneMockup";
import { useLanguage } from "@/i18n/LanguageContext";

const restaurantOrders = [
  { room: "412", items: "Grilled Salmon, Sparkling Water", notes: "No onions", payment: "Room Charge", status: "new" },
  { room: "208", items: "Avocado Toast, Cappuccino", notes: "—", payment: "Card", status: "preparing" },
  { room: "315", items: "Chocolate Fondant, Espresso", notes: "Extra napkins", payment: "Room Charge", status: "delivered" },
];

const housekeepingRequests = [
  { room: "204", request: "Extra Towels", time: "5 min", status: "pending" },
  { room: "312", request: "Cleaning Requested", time: "12 min", status: "progress" },
  { room: "118", request: "Laundry Pickup", time: "20 min", status: "completed" },
];

const spaBookings = [
  { room: "215", treatment: "Deep Tissue Massage", time: "16:00", status: "confirmed" },
  { room: "109", treatment: "Finnish Sauna", time: "18:30", status: "pending" },
  { room: "322", treatment: "Hydrating Facial", time: "10:00", status: "completed" },
];

const StaffDashboardSection = () => {
  const { t } = useLanguage();
  return (
    <section id="staff-dashboard" className="section-padding bg-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">{t<string>("staff.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">{t<string>("staff.title")}</h2>
          <p className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">{t<string>("staff.desc")}</p>
        </motion.div>

        {/* Restaurant Orders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl text-primary-foreground mb-6">{t<string>("staff.restaurantOrders")}</h3>
          <TabletMockup>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-body font-semibold text-foreground text-sm">{t<string>("staff.incomingOrders")}</h4>
                <span className="text-xs font-body text-muted-foreground">{t<string>("staff.activeOrders")}</span>
              </div>
              <div className="space-y-3">
                {restaurantOrders.map((order) => (
                  <div key={order.room} className="card-luxury p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 sm:w-20">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <span className="font-body text-xs font-bold text-accent">{order.room}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-medium text-foreground">{order.items}</p>
                      <p className="font-body text-[10px] text-muted-foreground mt-0.5">{t<string>("staff.notes")}: {order.notes} · {order.payment}</p>
                    </div>
                    <div className="flex gap-2">
                      {order.status === "new" && (
                        <>
                          <span className="btn-accent text-[10px] py-1.5 px-3">{t<string>("staff.accept")}</span>
                          <span className="btn-secondary text-[10px] py-1.5 px-3 rounded-full">{t<string>("staff.decline")}</span>
                        </>
                      )}
                      {order.status === "preparing" && (
                        <span className="status-badge status-progress">{t<string>("staff.preparing")}</span>
                      )}
                      {order.status === "delivered" && (
                        <span className="status-badge status-completed">{t<string>("staff.delivered")}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabletMockup>
        </motion.div>

        {/* Housekeeping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="font-display text-2xl text-primary-foreground mb-6">{t<string>("staff.housekeepingDashboard")}</h3>
          <TabletMockup>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-body font-semibold text-foreground text-sm">{t<string>("staff.serviceRequests")}</h4>
                <span className="text-xs font-body text-muted-foreground">{t<string>("staff.today")}</span>
              </div>
              <div className="space-y-3">
                {housekeepingRequests.map((req) => (
                  <div key={req.room} className="card-luxury p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-body text-xs font-bold text-accent">{req.room}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-medium text-foreground">{req.request}</p>
                      <p className="font-body text-[10px] text-muted-foreground mt-0.5">{req.time}</p>
                    </div>
                    <div>
                      {req.status === "pending" && <span className="status-badge status-pending">{t<string>("staff.pending")}</span>}
                      {req.status === "progress" && <span className="status-badge status-progress">{t<string>("staff.inProgress")}</span>}
                      {req.status === "completed" && <span className="status-badge status-completed">{t<string>("staff.completed")}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabletMockup>
        </motion.div>

        {/* Spa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl text-primary-foreground mb-6">{t<string>("staff.spaBooking")}</h3>
          <TabletMockup>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-body font-semibold text-foreground text-sm">{t<string>("staff.todayBookings")}</h4>
                <span className="text-xs font-body text-muted-foreground">{t<string>("staff.bookingsCount")}</span>
              </div>
              <div className="space-y-3">
                {spaBookings.map((b) => (
                  <div key={b.room + b.time} className="card-luxury p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 sm:w-20">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <span className="font-body text-xs font-bold text-accent">{b.room}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-medium text-foreground">{b.treatment}</p>
                      <p className="font-body text-[10px] text-muted-foreground mt-0.5">{b.time}</p>
                    </div>
                    <div className="flex gap-2">
                      {b.status === "confirmed" && (
                        <>
                          <span className="status-badge status-completed">{t<string>("staff.confirmed")}</span>
                          <span className="btn-secondary text-[10px] py-1.5 px-3 rounded-full">{t<string>("staff.reschedule")}</span>
                        </>
                      )}
                      {b.status === "pending" && (
                        <>
                          <span className="btn-accent text-[10px] py-1.5 px-3">{t<string>("staff.confirm")}</span>
                          <span className="btn-secondary text-[10px] py-1.5 px-3 rounded-full">{t<string>("staff.reschedule")}</span>
                        </>
                      )}
                      {b.status === "completed" && (
                        <span className="status-badge status-completed">{t<string>("staff.completed")}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabletMockup>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffDashboardSection;
