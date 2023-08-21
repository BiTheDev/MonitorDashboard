import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import NewGaugeChart from "../Chart/NewGaugeChart";

const AreaDialog = ({ open, area, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>{area?.title}</DialogTitle>
      <DialogContent style={{ width: 800 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Access Point Information:</Typography>
            <Typography>Access Point Name: {area?.accessPoint.name}</Typography>
            <Typography>Health Status: {area?.accessPoint.status}</Typography>
            <Typography>
              Connected Devices: {area?.accessPoint.connectedDevices}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{ borderRadius: "15px", padding: "5px" }}
            >
              <NewGaugeChart
                initialChartTitle={"BandWidth"}
                initialChartValue={area?.accessPoint.bandwidth}
                initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
                initialMeasureType={"Mbps"}
                initialMeasureRange={[150, 300, 500]}
                initialMaxRandomVal={300}
                initialMinRandomVal={30}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{ borderRadius: "15px", padding: "5px" }}
            >
              <NewGaugeChart
                initialChartTitle={"Latency"}
                initialChartValue={area?.accessPoint.latency}
                initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
                initialMeasureType={"ms"}
                initialMeasureRange={[30, 100, 150]}
                initialMaxRandomVal={70}
                initialMinRandomVal={5}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{ borderRadius: "15px", padding: "5px" }}
            >
              <NewGaugeChart
                initialChartTitle={"Jitter"}
                initialChartValue={area?.accessPoint.jitter}
                initialColorTheme={["#27AE60", "#E67E22", "#C0392B"]}
                initialMeasureType={"ms"}
                initialMeasureRange={[30, 100, 150]}
                initialMaxRandomVal={70}
                initialMinRandomVal={5}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{ borderRadius: "15px", padding: "5px" }}
            >
              <NewGaugeChart
                initialChartTitle={"Availability"}
                initialChartValue={area?.accessPoint.availability}
                initialColorTheme={["#C0392B", "#E67E22", "#27AE60"]}
                initialMeasureType={"%"}
                initialMeasureRange={[60, 80, 100]}
                initialMaxRandomVal={240}
                initialMinRandomVal={220}
              />
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AreaDialog;
