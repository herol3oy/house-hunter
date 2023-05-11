import { useState } from "react";
import Image from "next/image";

export default function TopBar() {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNav = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <nav className="bg-blue-accent flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 md:px-60 p-10 w-full">
      <h1 className="text-white text-lg font-extrabold">House Hunter</h1>
      <div
        className={`flex-1 flex items-center flex-col md:flex-row justify-start gap-2 md:gap-10 ${
          !showNavigation ? "hidden" : "block"
        } md:flex`}
      >
        {NAVIGATION.map((nav) => (
          <a key={nav.name} href={nav.href} className="text-slate-50">
            {nav.name}
          </a>
        ))}
      </div>
      <div className="flex">
        {NAVIGATION_FEATURES.map((feature) => (
          <Image
            className={`md:block ${!showNavigation ? "hidden" : "md:block"}`}
            key={feature.name}
            src={feature.src}
            alt={feature.name}
            width={30}
            height={30}
          />
        ))}
      </div>
      <Image
        className="md:hidden"
        src={`/icons/${showNavigation ? "close" : "bars"}.svg`}
        alt={`${showNavigation ? "close" : "bars"} icon`}
        width={30}
        height={30}
        onClick={toggleNav}
      />
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
