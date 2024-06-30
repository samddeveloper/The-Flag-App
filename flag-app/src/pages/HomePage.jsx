import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Dropdown from '../components/Dropdown';
import CountryCard from '../components/CountryCard';
import './HomePage.css';

const HomePage = () => {
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
  });

  return (
    <main>
      <div className="home-page">
      <div className="search-filter">
        <Search SearchQuerry={searchQuery} setSearchQuerry={setSearchQuery} />
        <Dropdown selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
      </div>
      <div className="countries-grid">
        {loading ? (
          <p>Loading...</p>
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
