import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Espinos Abogados | Firma Jurídica en Quito",
  description:
    "Consorcio de abogados especializados en Derecho Civil, Penal, Empresarial y Laboral. Asesoría legal de alto nivel para personas y empresas en Ecuador.",
  openGraph: {
    title: "Espinos Abogados | Firma Jurídica Premium en Quito",
    description:
      "Más de 15 años defendiendo sus derechos. Agenda tu consulta gratuita con nuestros especialistas.",
    url: "https://espinosabogados.com",
    siteName: "Espinos Abogados",
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
        className={`${inter.variable} ${cormorant.variable} bg-white text-gray-700 font-sans antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
