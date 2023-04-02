import Image from "next/image";

export default function TopBar() {
  return (
    <nav className="flex items-center bg-blue-600 p-10 gap-10 px-60">
      <Image
        src="/reality-properties-logo.png"
        alt="Reality Properties"
        width={161}
        height={42}
      />
      <div className="flex-1 flex justify-start gap-10">
        {NAVIGATION.map((nav) => (
          <a key={nav.name} href={nav.href} className="text-slate-50">
            {nav.name}
          </a>
        ))}
      </div>
      <div className="flex">
        {NAVIGATION_FEATURES.map((feature) => (
          <Image
            key={feature.name}
            src={feature.src}
            alt={feature.name}
            width={30}
            height={30}
          />
        ))}
      </div>
    </nav>
  );
}

const NAVIGATION = [
  { name: "Homepage", href: "#" },
  { name: "About Us", href: "#" },
  { name: "For Rent", href: "#" },
  { name: "For Sale", href: "#" },
  { name: "Our Agents", href: "#" },
  { name: "Contant Us", href: "#" },
];

const NAVIGATION_FEATURES = [
  { name: "loved", src: "/icons/loved.svg" },
  { name: "compare", src: "/icons/compare.svg" },
];
