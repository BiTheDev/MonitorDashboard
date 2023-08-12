import React, { useRef, useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

// Register the components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        let myChart;
        if (chartRef.current) {
            const data = {
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56],
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
    }, []);

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default LineChart;
