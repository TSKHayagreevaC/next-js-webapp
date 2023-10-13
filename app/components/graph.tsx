// components/Graph.tsx

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface GraphProps {
  data: number[];
  labels: string[];
}

const Graph: React.FC<GraphProps> = ({ data, labels }) => {
  const chartRef = useRef(null);
  let chartInstance: any = null;

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the previous chart instance.
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Graph Data',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Make sure to destroy the chart when the component unmounts.
      }
    };
  }, [data, labels]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
