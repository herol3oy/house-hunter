import Image from "next/image";

export default function PropertyCard() {
  return (
    <div className="flex flex-col gap-3 h-fit">
      <img
        className="h-72 object-cover w-full"
        src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        alt="Property"
      />
      <h2 className="text-slate-700 font-medium">Villa With Pool FOr Sale</h2>
      <h2 className="text-blue-700 font-bold text-2xl">$225,000</h2>
      <p className="text-slate-700">263 Rexford Dr. Beverly Hills, CA 90212</p>
      <div className="flex items-center gap-4">
        <Image src="/icons/bed.svg" alt="bed icon" width={35} height={35} />
        <p className="text-slate-700">4 Beds</p>
        <Image src="/icons/bath.svg" alt="bed icon" width={35} height={35} />
        <p className="text-slate-700">2 Baths</p>
        <Image src="/icons/sq-ft.svg" alt="bed icon" width={35} height={35} />
        <p className="text-slate-700">980 SqFt</p>
      </div>
    </div>
  );
}
