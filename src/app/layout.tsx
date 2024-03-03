import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Berkley from "next/font/local";

// Font files can be colocated inside of `app`
const berkley = Berkley({
  src: "./fonts/BerkeleyMonoVariable-Regular.woff2",
  display: "swap",
  variable: "--font-berkley",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Devansh G.",
  description: "This is the personal website of Devansh Gandhi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
      lang="en"
    >
      <body className={`${inter.variable} ${berkley.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
