import React from "react";
import "./LanguageBarChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["JavaScript", "Python", "Java", "C#", "TypeScript"],
  datasets: [
    {
      label: "Popularidade (%)",
      data: [66, 62, 40, 31, 28],
      backgroundColor: ["#F59E0B", "#5C7AEA", "#06B6D4", "#34D399", "#F472B6"]
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Popularidade de Linguagens de Programação",
      font: { size: 28 }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        callback: (value) => `${value}%`
      }
    }
  }
};

function LanguageBarChart() {
  return (
    <div className="language-bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default LanguageBarChart;
