import React, { JSX } from 'react'
import Card from '../Card/Card';
import { JsxEmit } from 'typescript';

interface Props { }
const imgLink1: string = 'https://images.unsplash.com/photo-1609741199695-096c491c7ccc?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const imgLink2: string = 'https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const imgLink3: string = 'https://plus.unsplash.com/premium_photo-1673340683562-cb8e2ed0b195?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return <div>
    <Card companyName="Apple" ticker="AAPL" price={100} imgLink={imgLink1} />
    <Card companyName="Microsoft" ticker="MSFT" price={200} imgLink={imgLink2} />
    <Card companyName="Tesla" ticker="TSLA" price={300} imgLink={imgLink3} />
  </div>;

}

export default CardList