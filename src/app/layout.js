import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Nafisa Anjum Laskar | Full-Stack Developer",
  description: "Aspiring AI engineer passionate about designing intelligent systems, from exoplanet detection to smart product pricing. Python, ML, Deep Learning.",
  keywords: "Nafisa Anjum Laskar, AI engineer, machine learning, deep learning, Python, portfolio, computer vision, NLP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
