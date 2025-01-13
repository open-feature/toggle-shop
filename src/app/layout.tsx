import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/providers/cart";
import { ReactQueryProvider } from "@/providers/react-query";
import { OpenFeatureProvider } from "@/providers/open-feature";
import { TARGETING_KEY } from "@/libs/targeting-key";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToggleShop",
  description: "If it can toggle, you'll find it here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <OpenFeatureProvider context={{ targetingKey: TARGETING_KEY }}>
            <CartProvider>
              <div className="min-h-screen bg-gray-100">
                <Header />
                <main>{children}</main>
              </div>
            </CartProvider>
          </OpenFeatureProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
