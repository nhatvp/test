import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
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

const BodyRecordGraph: React.FC = () => {
  const [timeframe, setTimeframe] = useState("year");

  const data = {
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
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
        backgroundColor: "lightblue",
        borderColor: "lightblue",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
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

  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#414141",
        color: "white",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontFamily: "Hiragino Kaku Gothic Pro", fontSize: "16px" }}
        >
          BODY RECORD
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Hiragino Kaku Gothic Pro",
            fontSize: "14px",
            marginLeft: "8px",
          }}
        >
          2021.05.21
        </Typography>
      </Box>
      <Box sx={{ height: "500px",width:'100%' }}>
        <Line data={data} options={options} />{" "}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left", marginTop: "16px" }}>
        <Button
          variant={timeframe === "day" ? "contained" : "outlined"}
          sx={{
            margin: "0 4px",
            color: timeframe === "day" ? "white" : "black",
            backgroundColor: timeframe === "day" ? "#FF963C" : "white",
            borderRadius: "20px",
          }}
          onClick={() => handleTimeframeChange("day")}
        >
          日
        </Button>
        <Button
          variant={timeframe === "week" ? "contained" : "outlined"}
          sx={{
            margin: "0 4px",
            color: timeframe === "week" ? "white" : "black",
            backgroundColor: timeframe === "week" ? "#FF963C" : "white",
            borderRadius: "20px",
          }}
          onClick={() => handleTimeframeChange("week")}
        >
          週
        </Button>
        <Button
          variant={timeframe === "month" ? "contained" : "outlined"}
          sx={{
            margin: "0 4px",
            color: timeframe === "month" ? "white" : "black",
            backgroundColor: timeframe === "month" ? "#FF963C" : "white",
            borderRadius: "20px",
          }}
          onClick={() => handleTimeframeChange("month")}
        >
          月
        </Button>
        <Button
          variant={timeframe === "year" ? "contained" : "outlined"}
          sx={{
            margin: "0 4px",
            color: timeframe === "year" ? "white" : "black",
            backgroundColor: timeframe === "year" ? "#FF963C" : "white",
            borderRadius: "20px",
          }}
          onClick={() => handleTimeframeChange("year")}
        >
          年
        </Button>
      </Box>
    </Box>
  );
};

export default BodyRecordGraph;
