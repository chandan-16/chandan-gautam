import { Outfit } from "next/font/google";
import { Ovo } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  weigth: ['400', '500', '600', '700']
});

const ovo = Ovo({
  weight: '400', 
  subsets: ['latin'],
})


export const metadata = {
  title: "Chandan Gautam",
  description: "Created Portfolio website for myself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} | antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
