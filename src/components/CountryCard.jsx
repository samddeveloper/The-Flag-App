import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <Link to={`/country/${country.name.common}`}>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <div className="country-info">
          <h3>{country.name.common}</h3>
          <div className="span">
          <span>Population: {country.population.toLocaleString()}</span>
          <span>Region: {country.region}</span>
          <span>Capital: {country.capital}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;