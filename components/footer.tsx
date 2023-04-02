import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center py-16">
      <Image
        src="/feature-property-accent.png"
        width={200}
        height={50}
        alt="Reality Properties Logo"
      />
    </div>
  );
}
