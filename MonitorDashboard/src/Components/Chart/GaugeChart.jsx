import React, {useState}from 'react'
import ReactGaugeMeter from "react-gauge-meter";
import { Box, Typography } from "@mui/material";


const GaugeChart = ({initialTitle, initialValue}) => {
  const [title, setTitle] = useState(initialTitle);
  const [value,setValue] = useState(initialValue);
  return (
    <Box maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <ReactGaugeMeter
        firstColor= "#E74C3C" //red
        secondColor= "#F39C12" // orange
        thirdColor="#2ECC71" // green
        value={value}
        style={{ height: "360px", width: "100%" }}
      />
    </Box>
  );
};

export default GaugeChart;
