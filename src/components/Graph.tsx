import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import mealImage from "../assets/pictures/meal.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph: React.FC = () => {
  const data = {
    labels: [
      "6月", "7月", "8月", "9月", "10月", "11月",
      "12月", "1月", "2月", "3月", "4月", "5月"
    ],
    datasets: [
      {
        label: "データセット 1",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 75, 70, 68, 65],
        fill: false,
        backgroundColor: "yellow",
        borderColor: "yellow",
      },
      {
        label: "データセット 2",
        data: [28, 48, 40, 19, 86, 27, 90, 85, 80, 75, 70, 68],
        fill: false,
        backgroundColor: "teal",
        borderColor: "teal",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false, 
        beginAtZero: true,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
    backgroundColor: "black",
  };

  const ProgressCircle = ({ percentage }: { percentage: number }) => {
    const radius = 50;
    const strokeWidth = 1;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute' }}>
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 0.5s' }}
        />
      </svg>
    );
  };

  return (
    <Box display="flex">
      <Card sx={{ position: "relative", width: "30%", overflow: "hidden",borderRadius:0,height:400 }}>
        <img
          src={mealImage}
          alt="Meal"
          style={{ width: "100%", height: "400px" }}
        />
        <CardContent
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              borderRadius: '50%',
            }}
          >
            <ProgressCircle percentage={75} />
            <Box sx={{ textAlign: 'center',display:'flex',justifyContent:'center', alignItems:'center', gap:1 }}>
              <Typography>05.21 </Typography>
              <Typography variant="h6">75%</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box
        width="70%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="black"
        sx={{height:400}}
      >
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default Graph;
