import React, { ReactNode } from 'react';

interface CardsProps {
  children: ReactNode;
}

const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <div className="card_container w-full h-full">{children}</div>
  );
}

export default Cards;
