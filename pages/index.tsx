import { useState } from "react";
import Filters from "@/components/filters";
import Hero from "@/components/hero";
import PropertyCard from "@/components/propertyCard";
import PropertyCardsContainer from "@/components/propertyCardsContainer";
import CallToAction from "@/components/callToAction";
import FeatureProperty from "@/components/featureProperty";
import { PROPERTIES_DATA } from "../DATA";
import { OrderBy } from "@/types/order-by";
import { filterProperties } from "@/utils/filter-properties";

const DEFAULT_NUMBER_OF_PROPERTIES = 6;

export default function Home() {
  const [numberOfProperties, setNumberOfProperties] = useState(
    DEFAULT_NUMBER_OF_PROPERTIES
  );
  const [selectedBaths, setSelectedBaths] = useState("");
  const [selectedBeds, setSelectedBeds] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedOrderBy, setSelectedOrderBy] = useState("");
  const [price, setPrice] = useState([0, 10000000]);
  const [square, setSquare] = useState([0, 1560]);
  const [userSearchQuery, setUserSearchQuery] = useState("");

  const filteredProperties = filterProperties(
    PROPERTIES_DATA,
    selectedBaths,
    selectedBeds,
    selectedPropertyType,
    price,
    square,
    userSearchQuery
  );

  switch (selectedOrderBy) {
    case OrderBy.PRICE.toLocaleLowerCase():
      filteredProperties.sort((a, b) => a.price - b.price);
      break;
    case OrderBy.SIZE.toLocaleLowerCase():
      filteredProperties.sort((a, b) => a.size - b.size);
      break;
    default:
      break;
  }

  return (
    <>
      <Hero
        {...{
          userSearchQuery,
          setUserSearchQuery,
        }}
      />
      <Filters
        {...{
          selectedBaths,
          setSelectedBaths,
          selectedBeds,
          setSelectedBeds,
          selectedPropertyType,
          setSelectedPropertyType,
          selectedOrderBy,
          setSelectedOrderBy,
          price,
          setPrice,
          square,
          setSquare,
        }}
      />
      <PropertyCardsContainer
        numberOfProperties={numberOfProperties}
        setNumberOfProperties={setNumberOfProperties}
      >
        {filteredProperties.length ? (
          filteredProperties
            .slice(0, numberOfProperties)
            .map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
        ) : (
          <h1 className="text-center col-span-3 text-3xl text-slate-400 font-bold">
            No result!
          </h1>
        )}
      </PropertyCardsContainer>
      <CallToAction />
      <FeatureProperty />
    </>
  );
}
