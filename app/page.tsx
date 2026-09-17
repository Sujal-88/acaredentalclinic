import TrustStats from "@/components/trust/TrustStats";
import TreatmentsSection from "@/components/treatments/TreatmentsSection";
import { CTABanner } from "@/components/CTABanner/CTABanner";
import Hero from "@/components/Hero/Hero";
import ServicesMarquee from "@/components/marquee/ServiceMarquee";
import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/team/TeamSection";
import BookingSection from "@/components/booking/BookingSection";
import ReviewsSection from "@/components/review/ReviewsSection";
import GallerySection from "@/components/gallery/GallerySection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ServicesMarquee />
      <AboutSection />
      <TreatmentsSection />
      <TrustStats />
      <TeamSection />
      <ReviewsSection />
      <GallerySection />
      <BookingSection />
      <Footer />
    </main>
  );
}