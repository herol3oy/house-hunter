import { Property } from "@/types/property";
import Image from "next/image";

type PropertyPropsType = { property: Property };

const PROPERTY_DETAILS = [
  {
    icon: "/icons/bed.svg",
    alt: "bed icon",
    width: 35,
    height: 35,
    name: "Beds",
  },

  {
    icon: "/icons/bath.svg",
    alt: "bath icon",
    width: 35,
    height: 35,
    name: "Baths",
  },
  {
    icon: "/icons/sq-ft.svg",
    alt: "sqft icon",
    width: 35,
    height: 35,
    name: "SqFt",
  },
];

export default function PropertyCard({ property }: PropertyPropsType) {
  const { image, title, price, address, beds, baths, size } = property;

  return (
    <div className="flex flex-col gap-2 h-fit">
      <Image
        className="h-72 object-cover w-full"
        src={image}
        alt="Property"
        width={350}
        height={400}
      />
      <div className="px-4 py-2">
        <h2 className="text-slate-500 text-lg">{title}</h2>
        <h2 className="text-blue-accent font-bold text-lg">
          ${price.toLocaleString()}
        </h2>
        <p className="text-slate-700 text-sm">{address}</p>
        <div className="flex items-center gap-4 py-2">
          {PROPERTY_DETAILS.map(({ alt, icon, width, height, name }) => (
            <div key={alt}>
              <Image src={icon} alt={alt} width={width} height={height} />
              <p className="text-slate-700">
                {beds} {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
