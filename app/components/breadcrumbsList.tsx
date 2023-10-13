// components/Layout.tsx

import React from 'react';
import Breadcrumbs from './breadcrumbs';

const BreadCrumbsList = ({ children }: {children: React.ReactNode}) => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Models', href: '/models' },
    { label: 'Model Details', href: '/models/123' }, // Add more items as needed
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>{children}</main>
    </div>
  );
};

export default BreadCrumbsList;
