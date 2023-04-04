// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { PropertyType } from "@/types/property-type";
import { OrderBy } from "@/types/order-by";
import { FiltersPropsType } from "@/types/filters-props-type";

export default function Filters({
  selectedBaths,
  setSelectedBaths,
  selectedBeds,
  setSelectedBeds,
  selectedPropertyType,
  setSelectedPropertyType,
  selectedOrderBy,
  setSelectedOrderBy,
  price,
  setPrice,
  square,
  setSquare,
}: FiltersPropsType) {

  const INPUT_SLIDERS = [
    {
      title: "Price range",
      value: price,
      setValue: setPrice,
      min: 0,
      max: 10000000,
    },
    {
      title: "Square footage",
      value: square,
      setValue: setSquare,
      min: 0,
      max: 1560,
    },
  ];

  return (
    <div className="flex flex-col gap-5 bg-white py-10 m-2 md:px-60">
      <h1 className="text-xl font-bold text-gray-600">Filters</h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <select
          className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full"
          value={selectedBaths}
          onChange={(e) => setSelectedBaths(e.target.value)}
        >
          <option value="">Baths</option>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((numOfBaths) => (
            <option key={numOfBaths} value={numOfBaths}>
              {numOfBaths}
            </option>
          ))}
        </select>
        <select
          className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full"
          value={selectedBeds}
          onChange={(e) => setSelectedBeds(e.target.value)}
        >
          <option value="">Beds</option>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((numOfBeds) => (
            <option key={numOfBeds} value={numOfBeds}>
              {numOfBeds}
            </option>
          ))}
        </select>
        <select
          className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full"
          value={selectedPropertyType}
          onChange={(e) => setSelectedPropertyType(e.target.value)}
        >
          <option value="">Type of estate</option>
          {Object.values(PropertyType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full"
          value={selectedOrderBy}
          onChange={(e) => setSelectedOrderBy(e.target.value)}
        >
          <option value="">Order by</option>
          {Object.values(OrderBy).map((option) => (
            <option key={option} value={option.toLocaleLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full">
        {INPUT_SLIDERS.map(({ title, min, max, value, setValue }) => {
          const minInputValue = value[0].toLocaleString();
          const maxInputValue = value[1].toLocaleString();
          return (
            <div key={title} className="flex flex-col gap-5 w-full">
              <h3>{title}</h3>
              <RangeSlider
                min={min}
                max={max}
                value={value}
                onInput={setValue}
              />
              <div className="flex justify-between">
                <small className="text-slate-500 font-bold">
                  {minInputValue}
                </small>
                <small className="text-slate-500 font-bold">
                  {maxInputValue}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
