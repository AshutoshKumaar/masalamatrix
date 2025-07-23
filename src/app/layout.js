import { Geist, Geist_Mono } from "next/font/google";
import { Mooli } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout"; // 👈 wrap client stuff

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mooli = Mooli({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mooli",
});

export const metadata = {
  title: "MasalaMatrix",
  description: "News + Adult Tales – Spicy Web App",
  verification: {
    google: "yrhURhS8kyKgdW23REs09mYU6GtkCXomegbXKLuvYOI", // 👈 Add this line
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mooli.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout> {/* ✅ Wrap here */}
      </body>
    </html>
  );
}
