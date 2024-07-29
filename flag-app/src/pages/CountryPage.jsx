import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SkeletonCountryDetails from '../components/SkeletonCountryDetails';
import arrowLeftDark from "../assets/arrow-left-dark.svg";
import arrowLeft from "../assets/arrow-left.svg";

import './CountryPage.css';

const CountryPage = ({ currentTheme }) => {
  const { name } = useParams(); // Hämtar landets namn från URL-parametrar
  const [country, setCountry] = useState(null); // Tillstånd för landets data
  const [loading, setLoading] = useState(true); // Tillstånd för att visa laddningsindikator

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        let response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        let data = await response.json();

        if (!data.length || data.status === 404) {
          // Om namnet inte hittas, försök hämta med landskod
          response = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
          data = await response.json();
        }

        setCountry(data[0]); // Sätt landets data i tillståndet
      } catch (error) {
        console.error('Error fetching country data:', error); // Hantera fel vid hämtning av data
      }
      setLoading(false);
    };

    fetchCountry(); // Anropa funktionen för att hämta landets data
  }, [name]); // Körs när 'name' ändras

  if (loading) {
    return <SkeletonCountryDetails />; // Visar laddningskomponent om data hämtas
  }

  if (!country) {
    return (
      <div className="not-found-container">
        <div className='not-found'>
          <Link to="/" className="back-button">
            <img
              src={currentTheme === "dark" ? arrowLeft : arrowLeftDark}
              alt={`${currentTheme === "dark" ? "Light" : "Dark"} Mode Icon`}
              className="arrow-icon"
            />
            BACK {/* Länk för att gå tillbaka */}
          </Link>
          <div>Country not found</div> {/* Visar om landet inte hittas */}
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className={`country-page ${currentTheme === "dark" ? "dark-mode" : "light-mode"}`}>
        <div className="back-button-wrapper">
          <Link to="/" className="back-button">
            <img
              src={currentTheme === "dark" ? arrowLeft : arrowLeftDark}
              alt={`${currentTheme === "dark" ? "Light" : "Dark"} Mode Icon`}
              className="arrow-icon"
            />
            BACK
          </Link>
        </div>

        <div className="country-details">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" /> {/* Visar landets flagga */}
          <div className="country-info">
            <h1><strong>{country.name.common}</strong></h1> {/* Landets namn */}
            <div className="country-row">
              <div className="country-info-row">
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p> {/* Landets befolkning */}
                <p><strong>Region:</strong> {country.region}</p> {/* Region */}
                <p><strong>Capital:</strong> {country.capital}</p> {/* Huvudstad */}
                <p><strong>Native name:</strong> {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : ''}</p> {/* Inhemskt namn */}
              </div>
              <div className="country-info-row">
                <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p> {/* Toppdomän */}
                <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : ''}</p> {/* Valutor */}
                <p><strong>Language:</strong> {country.languages ? Object.values(country.languages).join(', ') : ''}</p> {/* Språk */}
              </div>
            </div>
            <div className="border-countries">
              <div className="border-countries-title">
              <strong>Border Countries:</strong>
              </div>
              <div className="border-buttons">
                {country.borders && country.borders.length > 0 ? (
                  country.borders.map((border) => (
                    <div className="buttons" key={border}>
                      <Link to={`/country/${border}`} className="border-button">
                        {border}
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>This country has no border countries</p> //* Visar om landet inte har gränsande länder */
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
