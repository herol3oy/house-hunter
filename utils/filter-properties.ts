import { Property } from "@/types/property";

const MIN = 0;
const MAX = 1;

export function filterProperties(
  properties: Property[],
  selectedBaths: string,
  selectedBeds: string,
  selectedPropertyType: string,
  price: number[],
  square: number[]
) {
  return properties.filter((property: Property) => {
    if (
      !selectedBaths.length &&
      !selectedBeds.length &&
      !selectedPropertyType.length &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      selectedBaths.length &&
      !selectedBeds.length &&
      !selectedPropertyType.length &&
      property.baths === Number(selectedBaths) &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      !selectedBaths.length &&
      selectedBeds.length &&
      !selectedPropertyType.length &&
      property.beds === Number(selectedBeds) &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      !selectedBaths.length &&
      !selectedBeds.length &&
      selectedPropertyType.length &&
      property.type === selectedPropertyType &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      selectedBaths.length &&
      selectedBeds.length &&
      !selectedPropertyType.length &&
      property.baths === Number(selectedBaths) &&
      property.beds === Number(selectedBeds) &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      selectedBaths.length &&
      !selectedBeds.length &&
      selectedPropertyType.length &&
      property.baths === Number(selectedBaths) &&
      property.type === selectedPropertyType &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else if (
      !selectedBaths.length &&
      selectedBeds.length &&
      selectedPropertyType.length &&
      property.beds === Number(selectedBeds) &&
      property.type === selectedPropertyType &&
      property.price >= price[MIN] &&
      property.price <= price[MAX] &&
      property.size >= square[MIN] &&
      property.size <= square[MAX]
    ) {
      return true;
    } else {
      return (
        property.baths === Number(selectedBaths) &&
        property.beds === Number(selectedBeds) &&
        property.type === selectedPropertyType &&
        property.price >= price[MIN] &&
        property.price <= price[MAX] &&
        property.size >= square[MIN] &&
        property.size <= square[MAX]
      );
    }
  });
}
