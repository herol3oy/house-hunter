import { useState } from "react";
import Filters from "@/components/filters";
import Hero from "@/components/hero";
import PropertyCard from "@/components/propertyCard";
import PropertyCardsContainer from "@/components/propertyCardsContainer";
import CallToAction from "@/components/callToAction";
import FeatureProperty from "@/components/featureProperty";
import { PROPERTIES_DATA } from "../DATA";

const DEFAULT_NUMBER_OF_PROPERTIES = 6;

export default function Home() {
  const [numberOfProperties, setNumberOfProperties] = useState(
    DEFAULT_NUMBER_OF_PROPERTIES
  );

  return (
    <>
      <Hero />
      <Filters />
      <PropertyCardsContainer
        numberOfProperties={numberOfProperties}
        setNumberOfProperties={setNumberOfProperties}
      >
        {PROPERTIES_DATA.slice(0, numberOfProperties).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </PropertyCardsContainer>
      <CallToAction />
      <FeatureProperty />
    </>
  );
}
