import { Property } from "@/types/property";

export function filterProperties(
  properties: Property[],
  selectedBaths: string,
  selectedBeds: string,
  selectedPropertyType: string
) {
  return properties.filter((property: Property) => {
    if (!selectedBaths && !selectedBeds && !selectedPropertyType) {
      return true;
    } else if (selectedBaths && !selectedBeds && !selectedPropertyType) {
      return property.baths === Number(selectedBaths);
    } else if (!selectedBaths && selectedBeds && !selectedPropertyType) {
      return property.beds === Number(selectedBeds);
    } else if (!selectedBaths && !selectedBeds && selectedPropertyType) {
      return property.type === selectedPropertyType;
    } else if (selectedBaths && selectedBeds && !selectedPropertyType) {
      return (
        property.baths === Number(selectedBaths) &&
        property.beds === Number(selectedBeds)
      );
    } else if (selectedBaths && !selectedBeds && selectedPropertyType) {
      return (
        property.baths === Number(selectedBaths) &&
        property.type === selectedPropertyType
      );
    } else if (!selectedBaths && selectedBeds && selectedPropertyType) {
      return (
        property.beds === Number(selectedBeds) &&
        property.type === selectedPropertyType
      );
    } else {
      return (
        property.baths === Number(selectedBaths) &&
        property.beds === Number(selectedBeds) &&
        property.type === selectedPropertyType
      );
    }
  });
}
