import TrustStats from "@/components/trust/TrustStats";
import TreatmentsSection from "@/components/treatments/TreatmentsSection";
import { CTABanner } from "@/components/CTABanner/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TrustStats />
      <TreatmentsSection />
      <CTABanner />
    </main>
  );
}