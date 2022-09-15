const Logos = [
  {
    name: "Company 1",
  },
  {
    name: "Company 2",
  },
  {
    name: "Company 3",
  },
];
export const InlineLogo = () => {
  return (
    <div className="py-12">
      <div>
        <h2 className="text-3xl font-bold text-center text-sky-500">
          Our Clients
        </h2>
      </div>
      <div className="flex justify-center mt-10">
        {Logos &&
          Logos.map((logo, index) => (
            <div className="px-4" key={`logo-${index}`}>
              <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
