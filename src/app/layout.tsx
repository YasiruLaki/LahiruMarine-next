import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FAQPage and Service structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lahiru Traders",
              "url": "https://lahirutraders.lk/",
              "logo": "/logo.png",
              "description": "Comprehensive marine services including shipboard waste removal, junk dealing, and skilled marine contracting like tank cleaning, painting, and more.",
              "service": [
                {
                  "@type": "Service",
                  "name": "Shipboard Waste Removal",
                  "description": "Safe, compliant and sustainable shipboard waste removal services designed to meet both industry regulations and operational timelines."
                },
                {
                  "@type": "Service",
                  "name": "Junk Dealing",
                  "description": "We buy and deal in a wide range of marine and industrial junk, including scrap metals, decommissioned equipment, old wire ropes, mooring ropes and vessel parts."
                },
                {
                  "@type": "Service",
                  "name": "Marine Contracting",
                  "description": "Skilled, certified labor for marine operations, including tank cleaning, chipping, painting, hatch cleaning, engine room cleaning, and more."
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}<SpeedInsights/></body>
    </html>
  );
}