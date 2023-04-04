import { Property } from "@/types/property";

const MIN = 0;
const MAX = 1;
export function filterProperties(
  properties: Property[],
  selectedBaths: string,
  selectedBeds: string,
  selectedPropertyType: string,
  price: number[],
  square: number[],
  userSearchQuery: string
) {
  const userQuery = userSearchQuery.toLowerCase();

  function matchesCriteria(property: Property) {
    const title = property.title.toLowerCase();

    const hasSelectedBaths = selectedBaths.length && property.baths === Number(selectedBaths);
    const hasSelectedBeds = selectedBeds.length && property.beds === Number(selectedBeds);
    const hasSelectedPropertyType = selectedPropertyType.length && property.type === selectedPropertyType;
    const isInRange = property.price >= price[MIN] && property.price <= price[MAX] && property.size >= square[MIN] && property.size <= square[MAX];
    const hasUserQuery = title.includes(userQuery);

    return (!selectedBaths.length || hasSelectedBaths) && (!selectedBeds.length || hasSelectedBeds) && (!selectedPropertyType.length || hasSelectedPropertyType) && isInRange && hasUserQuery;
  }

  return properties.filter(matchesCriteria);
}