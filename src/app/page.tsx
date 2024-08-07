'use client';
import React, { useState } from 'react';
import Select from './components/Select';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };
  const countryOptions = [
    { value: '', label: 'Choose a country' },
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-row gap-7">
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-semibold">Country Selection</h3>
          <div className="text-sm text-gray-500">
            <span className="underline">Tip:</span> Select the country where you
            currently live.
          </div>
        </div>
        <div className="w-1/3">
          <Select
            options={countryOptions}
            label="Select an option"
            selectedOption={selectedCountry}
            handleChange={handleCountryChange}
          />
        </div>
      </div>
      <p className="mt-4">Selected Country: {selectedCountry}</p>
    </div>
  );
}
