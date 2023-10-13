// components/Layout.tsx

import React from 'react';
import Dashboard from './dashboard';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Dashboard />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
