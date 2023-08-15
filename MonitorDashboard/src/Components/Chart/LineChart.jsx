import React, { useRef, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

// Register the components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const LineChart = ({initialChartTitle, initialChartData}) => {
    const chartRef = useRef(null);
    const [chartTitle, setChartTitle] = useState(initialChartTitle);
    const [chartData, setChartData] = useState(initialChartData);

    useEffect(() => {
        let myChart;
        if (chartRef.current) {
            const data = {
                labels: ["2023/7/28", "2023/7/29","2023/7/30","2023/7/31", "2023/8/1", "2023/8/2"],
                datasets: [{
                    label: 'Throughput',
                    data: chartData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            };

            myChart = new Chart(chartRef.current, {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }

        // Cleanup function
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [chartData, chartTitle]);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Typography variant="subtitle1" align="center">{chartTitle}</Typography>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default LineChart;
