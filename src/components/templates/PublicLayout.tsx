import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { WhatsAppButton } from '../atoms/WhatsAppButton';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white min-h-screen text-gray-700 font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
