import React, { useEffect, useRef, useState } from "react";

import { Chart, DoughnutController, ArcElement } from "chart.js";

import { Typography } from "@mui/material";

// gaugeLabels plugin
// const gaugeLabels = {
//   id: "gaugeLabels",
//   afterDatasetsDraw(chart, args, plugins) {
//     const {
//       ctx,
//       chartArea: { left, right },
//     } = chart;
//     const xCenter = chart.getDatasetMeta(0).data[0].x;
//     const yCenter = chart.getDatasetMeta(0).data[0].y;
//     const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
//     const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
//     const widthSlice = (outerRadius - innerRadius) / 2;

//     ctx.translate(xCenter, yCenter);
//     ctx.font = "bold 15px sans-serif";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.fillText("Good", 0 - innerRadius - widthSlice, 0 + 20);

//     ctx.font = "bold 15px sans-serif";
//     ctx.fillStyle = "black";
//     ctx.textAlign = "center";
//     ctx.fillText("Bad", 0 + innerRadius + widthSlice, 0 + 20);

//     ctx.restore();
//   },
// };



Chart.register(DoughnutController, ArcElement);

const NewGaugeChart = ({
  initialChartTitle,
  initialChartValue,
  initialColorTheme,
  initialMeasureType,
  initialMeasureRange,
  initialMaxRandomVal,
  initialMinRandomVal
}) => {
  const chartRef = useRef(null);
  const [chartTitle, setChartTitle] = useState(initialChartTitle);
  const [chartValue, setChartValue] = useState(initialChartValue);
  const [chartColorTheme, setChartColorTheme] = useState(initialColorTheme);
  const [chartMeasureType, setChartMeasureType] = useState(initialMeasureType);
  const [chartMeasureRange, setChartMeasureRange] =
    useState(initialMeasureRange);

  const [maxRandomVal, setMaxRandomVal] = useState(initialMaxRandomVal);
  const [minRandomVal, setMinRandomVal] = useState(initialMinRandomVal);

  const gaugeNeedle = {
    id: "gaugeNeedle",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;

      ctx.save();
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
      const widthSlice = (outerRadius - innerRadius) / 2;
      const radius = 15;
      const angle = Math.PI / 180;

      const needleValue = data.datasets[0].needleValue;
      const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
      const circumferenceRotation =
        (chart.getDatasetMeta(0).data[0].circumference /
          Math.PI /
          data.datasets[0].data[0]) *
        needleValue;
      ctx.translate(xCenter, yCenter);
      ctx.rotate(Math.PI * (circumferenceRotation + 1.5));

      // needle
      ctx.beginPath();
      ctx.strokeStyle = "#BDC3C7";
      ctx.fillStyle = "#BDC3C7";
      ctx.moveTo(0 - radius, 0);
      ctx.lineTo(0, 0 - innerRadius - widthSlice);
      ctx.lineTo(0 + radius, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      // dot
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, angle * 360, false);
      ctx.fill();

      ctx.restore();
    },
  };

  // gaugeFlowMeter plugin
  const gaugeFlowMeter = {
    id: "gaugeFlowMeter",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;

      ctx.save();
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      const needleValue = Math.round(data.datasets[0].needleValue);
      const circumferenceRotation =
        (chart.getDatasetMeta(0).data[0].circumference /
          Math.PI /
          data.datasets[0].data[0]) *
        needleValue;

      // flowMeter

      ctx.font = "bold 30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(needleValue + chartMeasureType, xCenter, yCenter + 45);
    },
  };

  const smoothAnimation = (myChart, targetValue, duration) => {
    let startValue = myChart.data.datasets[0].needleValue;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      myChart.data.datasets[0].needleValue =
        startValue + (targetValue - startValue) * progress;
      myChart.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    let myChart;
    if (chartRef.current) {
      const data = {
        datasets: [
          {
            label: chartTitle,
            data: chartMeasureRange,
            backgroundColor: chartColorTheme,
            borderWidth: 0,
            circumference: 180,
            rotation: 270,
            cutout: "85%",
            needleValue: chartValue,
          },
        ],
      };

      myChart = new Chart(chartRef.current, {
        type: "doughnut",
        data,
        options: {
          aspectRatio: 1.3,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          }
        },
        plugins: [gaugeNeedle, gaugeFlowMeter],
      });
    }

    const changeValueRandomly = () => {
      const newValue = Math.round(Math.random() * (maxRandomVal - minRandomVal + 1) + minRandomVal);
      setChartValue(newValue);

      if (myChart) {
        smoothAnimation(myChart, newValue, 1000); // Update needle value with animation
      }

      if (myChart) {
        myChart.data.datasets[0].needleValue = newValue; // Update needle value directly in the dataset
        myChart.update(); // Call update on the chart instance to redraw only the updated parts
      }
    };

    const intervalId = setInterval(changeValueRandomly, 10000); // Change to setInterval to keep updating the needle

    return () => {
      if (myChart) {
        myChart.destroy();
      }
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [chartTitle]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Typography variant="subtitle1" align="center">
        {chartTitle}
      </Typography>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default NewGaugeChart;
