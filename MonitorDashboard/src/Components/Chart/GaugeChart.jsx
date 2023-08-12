import React from "react";
import ReactGaugeMeter from "react-gauge-meter";
import { Box } from "@mui/material";

const GaugeChart = () => {
  return (
    <Box maxWidth="lg">
      <ReactGaugeMeter
        firstColor="red"
        secondColor="orange"
        thirdColor="green"
        value={75}
        style={{ height: "500px", width: "100%" }}
      />
    </Box>
  );
};

export default GaugeChart;
