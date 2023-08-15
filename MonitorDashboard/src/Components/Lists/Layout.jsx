import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';

export default function Layout({ checked, setChecked }) {
    //const [checked, setChecked] = React.useState(['bandwidth', 'latency', 'availability','upload', 'download','jitter' ]);
    
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>Dashboard Display</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <NetworkCheckIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-bandwidth" primary="Bandwidth" />
          <Switch
            edge="end"
            onChange={handleToggle('bandwidth')}
            checked={checked.indexOf('bandwidth') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-bandwidth',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-latency" primary="Latency" />
          <Switch
            edge="end"
            onChange={handleToggle('latency')}
            checked={checked.indexOf('latency') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-latency',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-availability" primary="Availability" />
          <Switch
            edge="end"
            onChange={handleToggle('availability')}
            checked={checked.indexOf('availability') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-availability',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <UploadIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-upload" primary="Upload Throughout" />
          <Switch
            edge="end"
            onChange={handleToggle('upload')}
            checked={checked.indexOf('upload') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-upload',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-download" primary="Download Throughout" />
          <Switch
            edge="end"
            onChange={handleToggle('download')}
            checked={checked.indexOf('download') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-download',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-jitter" primary="Jitter" />
          <Switch
            edge="end"
            onChange={handleToggle('jitter')}
            checked={checked.indexOf('jitter') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-jitter',
            }}
          />
        </ListItem>
      </List>
    );
}