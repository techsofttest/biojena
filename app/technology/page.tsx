import TechHero from "../components/TechHero";
import TechDetails from "../components/TechDetails";
import TechMechanism from "../components/TechMechanism";
import TechDimensions from "../components/TechDimensions";
import TechSpecs from "../components/TechSpecs";
import TechCTA from "../components/TechCTA";

// Standard Next.js Metadata for SEO
export const metadata = {
    title: "Technology | BIOJENA",
    description: "Material Design at the Source. Explore Mobile Matrix Reservoir (MMR) Technology.",
};

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-bio-bg flex flex-col">
            <TechHero />
            <TechDetails />
            <TechMechanism />
            <TechDimensions />
            <TechSpecs />
            <TechCTA />
        </main>
    );
}