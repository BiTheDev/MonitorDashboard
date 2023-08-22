import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import LineChart from "../../Components/Chart/LineChart";
import StatusBox from "../../Components/Status/StatusBox";
import NewGaugeChart from "../../Components/Chart/NewGaugeChart";
const StatusPage = ({ checked }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        Core Status
      </Typography>
      <Grid container spacing={3}>
        {/* Status Boxes */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <StatusBox initialStatusTitle="Connected Devices" initialStatusText="8 devices" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <StatusBox initialStatusTitle="Package Loss" initialStatusText="N/A" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <StatusBox initialStatusTitle="Network Health" initialStatusText="HEALTHY" />
          </Paper>
        </Grid>

        {/* Gauge Charts */}
        {checked.includes('bandwidth') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px'}}>
            <NewGaugeChart
             initialChartTitle={"BandWidth"}
             initialChartValue={100}
             initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
             initialMeasureType={"Mbps"}
             initialMeasureRange={[150, 300, 500]}
             initialMaxRandomVal={300}
             initialMinRandomVal={30}
             />
          </Paper>
        </Grid>}
        {checked.includes('latency') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px' }}>
            <NewGaugeChart
             initialChartTitle={"Latency"}
             initialChartValue={20}
             initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
             initialMeasureType={"ms"}
             initialMeasureRange={[30, 100, 150]}
             initialMaxRandomVal={70}
             initialMinRandomVal={5}
             />
          </Paper>
        </Grid>}
        {checked.includes('availability') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px' }}>
            <NewGaugeChart
             initialChartTitle={"Availability"}
             initialChartValue={240}
             initialColorTheme={["#C0392B", "#E67E22", "#27AE60"]}
             initialMeasureType={"%"}
             initialMeasureRange={[60, 80, 100]}
             initialMaxRandomVal={240}
             initialMinRandomVal={240}
             />
          </Paper>
        </Grid>}
        {/* Line Charts */}
        {checked.includes('upload') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px' }}>
            <LineChart initialChartTitle={"Throughput - Upload"} initialChartData = {[15,30,45,25,20,40]} />
          </Paper>
        </Grid>}
        {checked.includes('download') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px' }}>
            <LineChart initialChartTitle={"Throughput - Download"} initialChartData = {[15,20,40,30,20,30]} />
          </Paper>
        </Grid>}
        {checked.includes('jitter') && <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '25px' }}>
            <NewGaugeChart
             initialChartTitle={"Jitter"}
             initialChartValue={20}
             initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
             initialMeasureType={"ms"}
             initialMeasureRange={[30, 100, 150]}
             initialMaxRandomVal={70}
             initialMinRandomVal={5}
             />
          </Paper>
        </Grid>}
      </Grid>


    </Container>
  );
};

export default StatusPage;
