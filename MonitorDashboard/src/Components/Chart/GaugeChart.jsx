import React, { useState, useEffect } from 'react'
import ReactGaugeMeter from "react-gauge-meter";
import { Box, Typography } from "@mui/material";

const GaugeChart = ({ initialTitle, initialValue }) => {
  const [title, setTitle] = useState(initialTitle);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const changeValueRandomly = () => {
      const newValue = Math.round(Math.random() * 100) + 1;
      setValue(newValue);
    }

    const timeoutId = setTimeout(changeValueRandomly, 10000);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Box maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <ReactGaugeMeter
        firstColor="#E74C3C" //red
        secondColor="#F39C12" // orange
        thirdColor="#2ECC71" // green
        value={value}
        style={{ height: "360px", width: "100%" }}
      />
    </Box>
  );
};

export default GaugeChart;
