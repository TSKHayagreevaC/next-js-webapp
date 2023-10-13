// components/Dashboard.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Widget 1 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">Widget 1</h2>
        {/* Add content for Widget 1 */}
      </div>

      {/* Widget 2 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">Widget 2</h2>
        {/* Add content for Widget 2 */}
      </div>

      {/* Widget 3 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">Widget 3</h2>
        {/* Add content for Widget 3 */}
      </div>

      {/* Add more widgets as needed */}
    </div>
  );
};

export default Dashboard;
