import React, { JSX } from 'react'
import "./Card.css";
import { JsxElement } from 'typescript';

interface Props {
  companyName: string;
  ticker: string;
  price: number;
  imgLink: string
};

const Card: React.FC<Props> = ({ companyName, ticker, price, imgLink }: Props): JSX.Element => {

  return <div className="card">
    <img
      src={imgLink}
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