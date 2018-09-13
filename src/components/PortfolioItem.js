import React from 'react';


const PortfolioItem = (props) => (
  <div>
    <p>Project {props.match.params.id}</p>
  </div>
);



export default PortfolioItem;
