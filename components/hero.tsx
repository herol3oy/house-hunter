import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { PropertyStatus } from "@/types/property-status";

export default function Hero({
  userSearchQuery,
  setUserSearchQuery,
  selectedOption,
  setSelectedOption,
}: {
  userSearchQuery: string;
  setUserSearchQuery: Dispatch<SetStateAction<string>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<PropertyStatus>>;
}) {
  return (
    <div className="bg-hero-image bg-bottom bg-no-repeat bg-cover flex flex-col gap-5 justify-end px-12 md:px-60 h-96 md:h-128">
      <h1 className="text-white text-5xl font-bold">Let us Guide You Home</h1>
      <p className="text-white text-xl">Find the house of your dreams</p>

      <div className="grid grid-cols-1 md:grid-cols-12 h-16 mb-24 mt-5 gap-4 md:gap-0">
        <select
          className="bg-white text-gray -900 rounded-l-xl rounded-r-xl md:rounded-r-none col-span-4 md:col-span-2 p-2.5"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as PropertyStatus)}
        >
          {Object.values(PropertyStatus).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="flex rounded-xl col-span-4">
          <span className="hidden items-center pl-2 pr-1 bg-white rounded-l-none md:flex">
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
            className="flex-1 p-2 md:p-0 rounded-xl md:rounded-l-none pl-1 placeholder:text-gray-900 w-full"
            placeholder="Search for properties or keywords"
            value={userSearchQuery}
            onChange={(e) => setUserSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}