import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import CellTowerIcon from '@mui/icons-material/CellTower';
import FiveGIcon from '@mui/icons-material/FiveG';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import HomeIcon from '@mui/icons-material/Home';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RouterIcon from '@mui/icons-material/Router';

import Network from '../../Components/Lists/Network';
import Layout from '../../Components/Lists/Layout';

export default function Settings() {
    
  
    return (
    <Grid container spacing={15}>
        <Grid item xs={6} md={6}>
            <Network />
        </Grid>
        <Grid item xs={12} md={6}>
            <Layout />
        </Grid>
    </Grid>
    );
  }