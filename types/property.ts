import { PropertyStatus } from "./property-status";
import { PropertyType } from "./property-type";

export interface Property {
  id: number;
  title: string;
  size: number;
  price: number;
  beds: number;
  baths: number;
  address: string;
  type: PropertyType;
  status: PropertyStatus;
  image: string;
}
