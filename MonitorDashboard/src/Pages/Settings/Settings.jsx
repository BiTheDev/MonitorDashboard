import * as React from 'react';
import Grid from '@mui/material/Grid';

import Network from '../../Components/Lists/Network';
import Layout from '../../Components/Lists/Layout';

export default function Settings({ checked, setChecked }) {

    return (
    <Grid container spacing={15}>
        <Grid item xs={6} md={6}>
            <Network />
        </Grid>
        <Grid item xs={12} md={6}>
            <Layout checked={checked} setChecked={setChecked}/>
        </Grid>
    </Grid>
    );
  }