import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import "./RadarChart.css";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function RadarChart() {
  const data = {
    labels: ["Desenvolvimento Web", "Backend", "Banco de Dados", "IA", "Performance"],
    datasets: [
      {
        label: "Nível de Conhecimento (%)",
        data: [90, 70, 65, 50, 60],
        backgroundColor: "rgba(92,122,234,0.3)",
        borderColor: "#5C7AEA",
        borderWidth: 2,
        pointBackgroundColor: "#5C7AEA",
        pointBorderColor: "#fff",
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          color: "#1F2937",
          backdropColor: "transparent"
        },
        pointLabels: {
          color: "#111",
          font: { size: 14, weight: "500" }
        }
      }
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#1F2937",
          font: { size: 14, weight: "500" }
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#5C7AEA",
        titleColor: "#fff",
        bodyColor: "#fff"
      }
    }
  };

  return (
    <section className="radar-chart-card">
      <h2>Minhas Skills</h2>
      <div className="radar-container">
        <Radar data={data} options={options} />
      </div>
    </section>
  );
}

export default RadarChart;
