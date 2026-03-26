import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { searchCompanies } from './api';
import { CompanySearch } from './company';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]); 
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  // Turn off TypeScript because impossible to figure out the type of event object: e.
  const onPortfolioCreate = (e: any ) => {
    // console.log("onPortfolioCreate event e = ", e);
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value );
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  //Turn off TypeScript
  const onPortfolioDelete = (e: any) => {
    e.preventDefault(); // Prevent the page reload when submit buuton is pressed.
    //Crate new array for filtered result
    const removed = portfolioValues.filter((value) => {
      //e.target is a list of form elements.
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    console.log(search);
    if (typeof result === "string") {
      setServerError(result);

    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    console.log(searchResult);
  };


  return (
    <div className="App">
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange} 
      />
      {serverError && <h1>serverError</h1>}
      <ListPortfolio 
        portfolioValues={portfolioValues} 
        onPortfolioDelete={onPortfolioDelete} 
      />
      <CardList 
        searchResuls={searchResult} 
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}


export default App;
