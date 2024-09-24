import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import DownloadSection from "@/components/DownloadSection";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <DownloadSection />
      <FeatureCard />
      <Footer />
    </>
  );
}
