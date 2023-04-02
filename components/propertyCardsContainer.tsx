import { ChildrenProp } from "@/types/children-props";

export default function PropertyCardsContainer({ children }: ChildrenProp) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-60">
        {children}
      </div>
      <div className="flex justify-center items-center my-12">
        <button className="text-white rounded-full bg-blue-600 px-10 py-4">
          Show More
        </button>
      </div>
    </>
  );
}
