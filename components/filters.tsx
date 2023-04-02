// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import { PropertyType } from "@/types/property-type";

const ORDER_BY_OPTIONS = [
  { value: "", label: "Order by" },
  { value: "price", label: "Price" },
  { value: "size", label: "Size" },
];

export default function Filters() {
  const [price, setPrice] = useState([0, 200]);
  const [square, setSquare] = useState([0, 200]);

  const SLIDERS = [
    {
      title: "Price range",
      value: price,
      setValue: setPrice,
    },
    {
      title: "Square footage",
      value: square,
      setValue: setSquare,
    },
  ];

  return (
    <div className="flex flex-col gap-5 bg-white py-10 px-60">
      <h1 className="text-xl font-bold text-gray-600">Filters</h1>
      <div className="flex justify-between gap-10">
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          <option value="">Baths</option>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((numOfBaths) => (
            <option key={numOfBaths} value={numOfBaths}>
              {numOfBaths}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          <option value="">Beds</option>
          {Array.from({ length: 6 }, (_, i) => i + 1).map((numOfBeds) => (
            <option key={numOfBeds} value={numOfBeds}>
              {numOfBeds}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          <option value="">Type of estate</option>
          {Object.values(PropertyType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select className="bg-white text-gray-600 border border-gray-400 text-gray rounded-xl col-span-2 p-3 w-full">
          {ORDER_BY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-24 w-full">
        {SLIDERS.map((slider) => (
          <div key={slider.title} className="flex flex-col gap-5 w-full">
            <h3>{slider.title}</h3>
            <RangeSlider value={slider.value} onInput={slider.setValue} />
            {slider.value}
          </div>
        ))}
      </div>
    </div>
  );
}
