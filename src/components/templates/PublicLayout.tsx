import { Navbar } from '../organisms/Navbar';
import { Hero } from '../organisms/Hero';
import { StatsBand } from '../organisms/StatsBand';
import { Services } from '../organisms/Services';
import { Trayectoria } from '../organisms/Trayectoria';
import { SuccessCases } from '../organisms/SuccessCases';
import { Team } from '../organisms/Team';
import { Contact } from '../organisms/Contact';
import { Footer } from '../organisms/Footer';
import { WhatsAppButton } from '../atoms/WhatsAppButton';
import { ParticleCanvas } from '../atoms/ParticleCanvas';

export const PublicLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-[#060911] min-h-screen text-white font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
      <ParticleCanvas />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <StatsBand />
        <Services />
        <Trayectoria />
        <SuccessCases />
        <Team />
        <Contact />
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};
