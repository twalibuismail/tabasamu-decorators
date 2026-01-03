import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-6">
        {children}
      </main>

      {/* 2. Weka Component ya Footer Hapa */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}