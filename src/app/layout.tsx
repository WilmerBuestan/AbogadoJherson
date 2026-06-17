import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"; // Importamos la librería de alertas

// Configuramos las fuentes
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

// Configuración de SEO y Metadatos para compartir en WhatsApp/Redes
export const metadata: Metadata = {
  title: "Jherson | Firma de Abogados en Quito",
  description:
    "Asesoría legal de alto nivel para personas y empresas. Especialistas en Derecho Civil, Penal, Empresarial y Laboral. Justicia con precisión.",
  openGraph: {
    title: "Jherson | Firma Jurídica Premium",
    description:
      "Estrategia, rigor y compromiso en cada caso. Agenda tu consulta gratuita.",
    url: "https://lex-ius-demo.vercel.app", // Aquí irá tu dominio final
    siteName: "Jherson Abogados",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#060911] text-white font-sans antialiased`}
      >
        {children}
        {/* Componente global para mostrar notificaciones */}
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
