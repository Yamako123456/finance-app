import React, { JSX } from 'react'
import "./Card.css";
import { JsxElement } from 'typescript';
import { CompanySearch } from '../../company';

interface Props {
  id: string;
  searchResult: CompanySearch;
};

function Card({ id, searchResult}: Props): JSX.Element {

  return <div className="card">
    <img 
     alt='Company Logo' />
    <div className='details'>
      <h2>
       {searchResult.name} ({searchResult.symbol})
      </h2>
      <p>{searchResult.currency}</p>

    </div>
    <p className='info'>
      {searchResult.exchangeFullName} - {searchResult.exchange}
    </p>
  </div>;

}

export default Card