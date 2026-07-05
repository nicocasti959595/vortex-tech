"use client";

import { CartProvider } from "./CartContext";
import { StoreUIProvider } from "./StoreUI";
import { QuickViewProvider } from "./QuickView";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import WhatsAppFab from "./WhatsAppFab";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <StoreUIProvider>
        <QuickViewProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFab />
        </QuickViewProvider>
      </StoreUIProvider>
    </CartProvider>
  );
}
