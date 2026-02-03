interface FlagContainerProps {
  flag: string;
  countryName: string;
}

export function FlagContainer({ flag, countryName }: FlagContainerProps) {
  return (
  <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center justify-center gap-4 border border-gray-700">
      <div className="text-8xl">
        {flag}
      </div>
      <div className="text-center">
        <p className="font-medium text-gray-200">{countryName}</p>
      </div>
    </div>
  );
}
