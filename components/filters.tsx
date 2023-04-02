export default function Filters() {
  return (
    <div className="flex flex-col gap-5 bg-white py-10 px-60">
      <h1 className="text-xl font-bold text-gray-600">Filters</h1>
      <div className="flex justify-between gap-10">
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          {OPTIONS.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          {OPTIONS.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          {OPTIONS.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          {OPTIONS.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
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
