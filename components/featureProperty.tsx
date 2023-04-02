import Image from "next/image";

export default function FeatureProperty() {
  return (
    <div className="bg-feature-property-image bg-no-repeat bg-cover min-h-screen w-full relative">
      <div className="flex flex-col gap-4 items-start rounded-md bg-white absolute p-12 top-1/2 transform -translate-y-1/2 left-60">
        <span className="rounded-md bg-amber-500 py-1 px-2 text-white mb-6">
          FOR SALE
        </span>
        <h1 className="text-3xl">Villa With Pool For Sale</h1>
        <h2 className="text-blue-accent font-bold text-2xl">$225,000</h2>
        <p>263 S Rexford Dr, Beverly Hills, CA 90212</p>
        <div className="flex items-center gap-4">
          <Image src="/icons/bed.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">4 Beds</p>
          <Image src="/icons/bath.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">2 Baths</p>
          <Image src="/icons/sq-ft.svg" alt="bed icon" width={35} height={35} />
          <p className="text-slate-700">980 SqFt</p>
        </div>
      </div>
    </div>
  );
}
