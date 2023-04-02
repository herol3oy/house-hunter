import Filters from "@/components/filters";
import Hero from "@/components/hero";
import PropertyCard from "@/components/propertyCard";
import PropertyCardsContainer from "@/components/propertyCardsContainer";
import CallToAction from "@/components/callToAction";
import FeatureProperty from "@/components/featureProperty";

export default function Home() {
  return (
    <>
      <Hero />
      <Filters />
      <PropertyCardsContainer>
        {[...Array(10)].map((_, i) => (
          <PropertyCard key={i} />
        ))}
      </PropertyCardsContainer>
      <CallToAction />
      <FeatureProperty />
    </>
  );
}
