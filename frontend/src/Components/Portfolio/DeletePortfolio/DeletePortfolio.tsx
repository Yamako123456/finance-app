import React, { SyntheticEvent } from 'react'

interface Props {
     
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  console.log("it's inside DeletePortfolio.tsx")
  return <div>
    <form onSubmit={onPortfolioDelete}>
      <input hidden={true} value={portfolioValue} />
      <button type='submit'>X</button>
    </form>
  
  </div>

}

export default DeletePortfolio;
