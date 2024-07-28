import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';
import './HomePage.css';
import SkeletonCountryCard from '../components/SkeletonCountryCard';

const HomePage = ({ currentTheme }) => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
      setLoading(false);
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedRegion ? country.region === selectedRegion : true)
    );
  })
  .sort ((a, b) => a.name.common.localeCompare(b.name.common));

  useEffect(() => {
    console.log("Filtered Countries:", filteredCountries); 
  }, [searchQuery, selectedRegion, countries]);

  return (
    <main>
      <div className="home-page">
        <div className="search-filter">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Dropdown selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} currentTheme={currentTheme} />
        </div>
        <div className="countries-grid">
          {loading ?  (
            Array.from({ length: 8 }).map((_, index) => <SkeletonCountryCard key={index} />)
          ) : (
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
