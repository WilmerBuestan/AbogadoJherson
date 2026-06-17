import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/593999999999?text=Hola,%20deseo%20agendar%20una%20consulta%20legal."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce"
    >
      <MessageCircle size={28} />
    </a>
  );
};