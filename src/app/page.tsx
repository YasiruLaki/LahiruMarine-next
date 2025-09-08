import type { Metadata } from "next";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "Lahiru Traders | Marine Solutions, Shipboard Waste Removal & Marine Contracting in Sri Lanka",
  description:
    "Lahiru Traders: Sri Lanka’s trusted experts in marine contracting, shipboard waste removal, and junk dealing for over 30 years. Reliable, compliant, and efficient marine services for ports, vessels, and maritime businesses.",
  keywords: [
    "Lahiru Traders",
    "Marine Solutions Sri Lanka",
    "Shipboard Waste Removal",
    "Marine Contracting",
    "Junk Dealing",
    "Marine Services",
    "Port Services",
    "Maritime Waste Management",
    "Sri Lanka Marine",
    "Vessel Waste Removal",
    "Marine Compliance",
    "Marine Expertise"
  ],
  openGraph: {
    title: "Lahiru Traders | Marine Solutions, Shipboard Waste Removal & Marine Contracting in Sri Lanka",
    description:
      "Over 30 years of expertise in marine contracting, shipboard waste removal, and junk dealing. Trusted partner for reliable, compliant, and efficient marine services in Sri Lanka.",
    url: "https://lahirutraders.lk",
    type: "website",
    locale: "en_US",
    siteName: "Lahiru Traders",
    images: [
      {
        url: "https://res.cloudinary.com/drj8voqyf/image/upload/v1757324857/og-image_he7ara.jpg",
        width: 1200,
        height: 630,
        alt: "Lahiru Traders - Marine Solutions in Sri Lanka"
      }
    ]
  }
};

export default function Page() {
  return <Landing />;
}