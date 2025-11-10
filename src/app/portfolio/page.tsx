import { Portfolio3D } from "@/components/portfolio3d";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of completed projects including residential homes, luxury villas, interior designs, and renovations in Hyderabad, India.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Portfolio3D />
    </div>
  );
}

