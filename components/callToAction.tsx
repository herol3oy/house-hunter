export default function CallToAction() {
  return (
    <div className="flex gap-5 px-60 my-24">
      <div className="flex flex-col gap-5 bg-gray-200 p-12 rounded-md w-full">
        <h1 className="text-blue-600 text-5xl">
          Aktas Properties {` `}
          <span className="font-bold">Information</span>
        </h1>
        <p className="text-gray-800">1234 Hacker St, San Francisco</p>
        <p className="text-gray-800">(123) 456-7890</p>
        <p className="text-gray-800">Mon — Sun: 8:00am - 6:00pm</p>
      </div>
      <div className="flex flex-col gap-5 bg-blue-600 p-12 rounded-md w-full">
        <h1 className="text-white text-5xl font-bold w-2/3">
          Want to Sell 
          {/* <br /> */}
          Property?
        </h1>
        <p className="text-white text-md w-2/3">
          Let us create a tailored strategic marketing plan and keep track of
          the selling process.
        </p>
        <div className="inline-flex">
          <button className="text-white rounded-full bg-green-500 px-6 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
