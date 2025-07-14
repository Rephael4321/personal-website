import "@/ui/globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Madefor for body text
const madeforText = localFont({
  src: "../fonts/madefor-text.woff2",
  display: "swap",
  variable: "--font-body",
});

// Madefor for headings
const madeforDisplay = localFont({
  src: "../fonts/madefor-display.woff2",
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${madeforText.variable} ${madeforDisplay.variable}`}
    >
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
