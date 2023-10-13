// components/CardContainer.tsx

import React from 'react';

const CardContainer = ({ children, containerHeading }: {children: React.ReactNode, containerHeading:string}) => {
  return (
    <div className='p-8'>
      <h2 className="text-2xl font-semibold">
        {containerHeading}
      </h2>

      <div className="flex flex-wrap">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;

