// components/Layout.tsx

import React from 'react';
import Graph from './graph';

interface GraphLayoutWraper {
    children: React.ReactNode
}

const GraphLayout: React.FC<GraphLayoutWraper> = ({ children }) => {
  const graphData = [65, 59, 80, 81, 56, 55, 40];
  const graphLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];

  return (
    <div>
      <Graph data={graphData} labels={graphLabels} />
      <main>{children}</main>
    </div>
  );
};

export default GraphLayout;
