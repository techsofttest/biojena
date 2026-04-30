import CompanyHero from "../components/CompanyHero";
import CompanyFoundation from "../components/CompanyFoundation";
import CompanyLeadership from "../components/CompanyLeadership";
import CompanyPartner from "../components/CompanyPartner";
import CompanyWhyNow from "../components/CompanyWhyNow";
import CompanyCommitment from "../components/CompanyCommitment";
import CompanyLocationCTA from "../components/CompanyLocationCTA";
import CompanyWhoWeAre from "../components/CompanyWhoWeAre";

// Standard Next.js Metadata for SEO
export const metadata = {
    title: "Company | BIOJENA",
    description: "Designable & Biodegradable Raw Materials for High-Performance Cosmetics.",
};

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-bio-bg flex flex-col">
            <CompanyHero />
            <CompanyWhoWeAre />
            <CompanyFoundation />
            <CompanyLeadership />
            <CompanyPartner />
            <CompanyWhyNow />
            <CompanyCommitment />
            <CompanyLocationCTA />
        </main>
    );
}