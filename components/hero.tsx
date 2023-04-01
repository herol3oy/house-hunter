import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col gap-5 justify-end bg-blue-600 px-40 h-96">
      <h1 className="text-white text-4xl font-bold">Let us Guide You Home</h1>
      <p className="text-white">Find the house of your dreams</p>

      <div className="grid grid-cols-12 h-16 mb-24 mt-5">
        <select className="bg-white text-gray -900 rounded-l-xl col-span-2 p-2.5 ">
          {OPTIONS.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>

        <div className="flex rounded-xl col-span-4">
          <span className="flex items-center pl-2 pr-1 bg-white rounded-l-none">
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="search icon"
            />
          </span>
          <input
            type="text"
            name="search"
            className="flex-1 rounded-r-xl pl-1 placeholder:text-gray-900 w-full"
            placeholder="Search for properties or keywords"
          />
        </div>
      </div>
    </div>
  );
}

const OPTIONS = [
  {
    id: 1,
    name: "For Rent",
  },
  {
    id: 2,
    name: "For Sale ",
  },
];
