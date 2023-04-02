import { Property } from "@/types/property";
import Image from "next/image";

type PropertyPropsType = { property: Property };

export default function PropertyCard({ property }: PropertyPropsType) {
  const { image, title, price, address, beds, baths, size } = property;

  return (
    <div className="flex flex-col gap-2 h-fit">
      <Image className="h-72 object-cover w-full" src={image} alt="Property" 
      width={350} height={400} />
      <div className="px-4 py-2">
        <h2 className="text-slate-500 text-lg">{title}</h2>
        <h2 className="text-blue-accent font-bold text-lg">
          ${price.toLocaleString()}
        </h2>
        <p className="text-slate-700 text-sm">{address}</p>
        <div className="flex items-center gap-4 py-2">
          <Image src="/icons/bed.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">{beds} Beds</p>
          <Image src="/icons/bath.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">{baths} Baths</p>
          <Image src="/icons/sq-ft.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">{size} SqFt</p>
        </div>
      </div>
    </div>
  );
}
