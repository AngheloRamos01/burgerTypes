import Navigation from "@/Components/Navigations";
import Home from "@/Components/Home";
import Products from "@/Components/Products";
import Reviews from "@/Components/Reviews";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <Home />
      <Products />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
