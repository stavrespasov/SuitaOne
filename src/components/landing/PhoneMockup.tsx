import { ReactNode } from "react";

export const PhoneMockup = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`phone-mockup w-[280px] ${className}`}>
    <div className="phone-notch" />
    <div className="phone-mockup-inner h-[560px] relative">
      {children}
    </div>
  </div>
);

export const TabletMockup = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`tablet-mockup w-full max-w-[700px] ${className}`}>
    <div className="tablet-mockup-inner min-h-[460px] relative">
      {children}
    </div>
  </div>
);
