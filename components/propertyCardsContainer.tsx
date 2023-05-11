import { ChildrenProp } from "@/types/children-props";
import { Dispatch, ReactNode, SetStateAction } from "react";

export default function PropertyCardsContainer({
  children,
  numberOfProperties,
  setNumberOfProperties,
}: {
  children: ReactNode;
  numberOfProperties: number;
  setNumberOfProperties: Dispatch<SetStateAction<number>>;
}) {
  function showMoreProperties() {
    setNumberOfProperties(numberOfProperties + 3);
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mx-2 md:px-60">
        {children}
      </div>
      <div className="flex justify-center items-center my-12">
        <button
          className="text-white rounded-full bg-blue-accent px-10 py-4"
          onClick={showMoreProperties}
        >
          Show More
        </button>
      </div>
    </>
  );
}
