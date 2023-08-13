import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import LineChart from "../../Components/Chart/LineChart";
import GaugeChart from "../../Components/Chart/GaugeChart";
import StatusBox from "../../Components/Status/StatusBox";

const StatusPage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {/* Status Boxes */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <StatusBox initialStatusTitle="Connected Devices" initialStatusText="8 devices" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <StatusBox initialStatusTitle="Package Loss" initialStatusText="N/A" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <StatusBox initialStatusTitle="Network Health" initialStatusText="HEALTHY" />
          </Paper>
        </Grid>

        {/* Gauge Charts */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <GaugeChart initialTitle={"BandWidth"} initialValue={75} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <GaugeChart initialTitle={"Latency"} initialValue={60} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '5px' }}>
            <GaugeChart initialTitle={"Availability"} initialValue={55} />
          </Paper>
        </Grid>
        
        {/* Line Charts */}
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <LineChart initialChartTitle={"ThroughPut - Upload"} initialChartData = {[15,30,45,25,20,40]} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <LineChart initialChartTitle={"ThroughPut - Download"} initialChartData = {[15,20,40,30,20,30]} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px' }}>
            <GaugeChart initialTitle={"Jitter"} initialValue={80} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatusPage;
