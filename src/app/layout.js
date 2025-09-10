import { Geist, Geist_Mono } from "next/font/google";
import { Mooli } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout"; // 👈 wrap client stuff
// import MonetagAdScript from "./components/MonetagAdScript";
import Script from "next/script";


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
 other: {
    monetag: "1954db27f9decb953ef71b544e99cfee", // ✅ Monetag tag added
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${mooli.variable} antialiased`}>
        {/* <MonetagAdScript /> */}
        <ClientLayout>{children}</ClientLayout> {/* ✅ Wrap here */}
         <Script
          id="monetag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(s => { 
              s.dataset.zone='9620754'; 
              s.src='https://al5sm.com/tag.min.js'
            })(
              [document.documentElement, document.body]
                .filter(Boolean)
                .pop()
                .appendChild(document.createElement('script'))
            );`,
          }}
        />

      </body>
    </html>
  );
}
