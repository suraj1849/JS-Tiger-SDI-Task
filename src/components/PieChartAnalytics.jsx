import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartAnalytics = ({
  labels,
  data,
  backgroundColor,
  position,
  chartName,
}) => {
  const chartData = {
    labels: labels || [],
    datasets: [
      {
        data: data || [],
        backgroundColor: backgroundColor || [],
      },
    ],
  };

  return (
    <div
      className="chart-container"
      style={{ flex: "1", width: "20%", height: "300px" }}
    >
      <p style={{ textAlign: "center", fontWeight: "600", marginBottom: "10" }}>
        {chartName || ""}
      </p>
      <Pie
        data={chartData}
        options={{
          maintainAspectRatio: false,
          width: 230,
          height: 230,
          plugins: {
            legend: {
              position: position,
              labels: {
                boxWidth: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChartAnalytics;
