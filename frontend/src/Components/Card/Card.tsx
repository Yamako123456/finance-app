import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number
};

const Card = ({ companyName, ticker, price }: Props) => {
  return <div className="card">
    <img
      src='https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='image'
    />
    <div className='details'>
      <h2>{companyName} ({ticker})</h2>
      <p>{price}</p>

    </div>
    <p className='info'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi dolorum vitae repellendus, nemo reprehenderit magnam. Maiores reprehenderit dolores blanditiis!
    </p>
  </div>;

};

export default Card