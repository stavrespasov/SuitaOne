import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import GuestExperienceSection from "@/components/landing/GuestExperienceSection";
import RoomServiceSection from "@/components/landing/RoomServiceSection";
import HousekeepingSection from "@/components/landing/HousekeepingSection";
import SpaSection from "@/components/landing/SpaSection";
import ConciergeSection from "@/components/landing/ConciergeSection";
import StaffDashboardSection from "@/components/landing/StaffDashboardSection";
import AdminPanelSection from "@/components/landing/AdminPanelSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <HowItWorksSection />
    <GuestExperienceSection />
    <RoomServiceSection />
    <HousekeepingSection />
    <SpaSection />
    <ConciergeSection />
    <StaffDashboardSection />
    <AdminPanelSection />
    <CTASection />
  </main>
);

export default Index;
