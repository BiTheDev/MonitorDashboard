import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

import CellTowerIcon from '@mui/icons-material/CellTower';
import StorageIcon from '@mui/icons-material/Storage';
import RouterIcon from '@mui/icons-material/Router';


export default function Network() {
    const [checked, setChecked] = React.useState(['core', 'radio-lowhub','radio-uphub','radio-ramm', 
    'radio-rob','radio-sciencedom','radio-greenhub', 'radio-musk', 'radio-outdoor']);
  
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
        subheader={<ListSubheader>Network</ListSubheader>}
      >
        <ListItem>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-core" primary="Core" />
          <Switch
            edge="end"
            onChange={handleToggle('core')}
            checked={checked.indexOf('core') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-core',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-lowhub" primary="Radio - Hub(Lower)" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-lowhub')}
            checked={checked.indexOf('radio-lowhub') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-lowhub',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-uphub" primary="Radio - Hub(Upper)" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-uphub')}
            checked={checked.indexOf('radio-uphub') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-uphub',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-ramm" primary="Radio - RAMM" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-ramm')}
            checked={checked.indexOf('radio-ramm') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-ramm',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-rob" primary="Radio - Rob Observ" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-rob')}
            checked={checked.indexOf('radio-rob') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-rob',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-sciencedom" primary="Radio - Science Dome" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-sciencedom')}
            checked={checked.indexOf('radio-sciencedom') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-sciencedom',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-greenhub" primary="Radio - Green Hub" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-greenhub')}
            checked={checked.indexOf('radio-greenhub') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-greenhub',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-musk" primary="Radio - Musk Observ" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-musk')}
            checked={checked.indexOf('radio-musk') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-musk',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CellTowerIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-radio-outdoor" primary="Radio - Outdoor" />
          <Switch
            edge="end"
            onChange={handleToggle('radio-outdoor')}
            checked={checked.indexOf('radio-outdoor') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-radio-outdoor',
            }}
          />
        </ListItem>
      </List>
    );
}