import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';
import './HomePage.css';
import SkeletonCountryCard from '../components/SkeletonCountryCard';

const HomePage = ({ currentTheme }) => {
  const [countries, setCountries] = useState([]); // Tillstånd för att lagra lista över länder
  const [searchQuery, setSearchQuery] = useState(''); // Tillstånd för sökfrågan
  const [selectedRegion, setSelectedRegion] = useState(''); // Tillstånd för vald region
  const [loading, setLoading] = useState(true); // Tillstånd för laddningsstatus

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://restcountries.com/v3.1/all'); // Hämtar alla länder
        const data = await response.json();
        setCountries(data); // Sätter landdata i tillståndet
      } catch (error) {
        console.error('Error fetching countries:', error); // Hanterar fel vid hämtning av data
      }
      setLoading(false); // Avslutar laddning
    };

    fetchCountries(); // Anropar funktionen för att hämta länder
  }, []);

  // Filtrerar länder baserat på sökfråga och vald region
  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion ? country.region === selectedRegion : true)
    );
  })
  .sort ((a, b) => a.name.common.localeCompare(b.name.common)); // Sorterar länderna alfabetiskt

  useEffect(() => {
    console.log("Filtered Countries:", filteredCountries); // Loggar filtrerade länder
  }, [searchQuery, selectedRegion, countries]); // Körs när sökfrågan, vald region eller länder ändras

  return (
    <main>
      <div className="home-page">
        <div className="search-filter">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Sökfält */}
          <Dropdown selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} currentTheme={currentTheme} /> {/* Dropdown för region */}
        </div>
        <div className="countries-grid">
          {loading ?  (
            // Visar skelettkort medan data laddas
            Array.from({ length: 8 }).map((_, index) => <SkeletonCountryCard key={index} />)
          ) : (
            // Visar kort för filtrerade länder
            filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
