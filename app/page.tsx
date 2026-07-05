import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import Catalog from "@/components/Catalog";
import ArmaPC from "@/components/ArmaPC";
import Brands from "@/components/Brands";
import Testimonios from "@/components/Testimonios";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <CategoryGrid />
      <FeaturedDeals />
      <Catalog />
      <ArmaPC />
      <Brands />
      <Testimonios />
      <FAQ />
      <Newsletter />
    </>
  );
}
