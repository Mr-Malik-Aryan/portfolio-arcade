import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Aryan Malik",
  description: "portfolio-arcade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
 
      <body className={`${inter.className} min-h-screen w-full `}>
        {children}
        <div className="absolute bottom-0">
     
      </div>
      </body>
    </html>
 
    
  );
}
