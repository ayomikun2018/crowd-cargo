import { chillaxFont } from "@/lib/font";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chillaxFont.variable} font-sans`}>
        <AppProviders>
          <main>
            {children}
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
