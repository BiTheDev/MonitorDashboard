import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'date', headerName: 'Date', width: 100},
  { field: 'time', headerName: 'Time', width: 120 },
  { field: 'device', headerName: 'Device', width: 120 },
  {
    field: 'location',
    headerName: 'Location',
    //type: 'number',
    width: 160,
  },
  {
    field: 'ip',
    headerName: 'IP Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'connectionState',
    headerName: 'State',
    width: 120,
  },
  {
    field: 'details',
    headerName: 'Details',
    sortable: false,
    width: 160,
  },
];

const currentTime = new Date();
// console.log('Time is '+ currentTime.toDateString());

const rows = [
  { id: 1, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Hub(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 2, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Hub(Upper)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 3, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'RAMM', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 4, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Robotic Observatory', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 5, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Science Dome', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 6, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Green Hab', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 7, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Indoor Radio', location: 'Musk Observatory', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 8, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Outdoor Radio', location: 'Desert', ip:'192.168.123.132', connectionState: 'Connected', details: 'Software Uptaded'},
  { id: 9, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Gas Monitor', location: 'Hub(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Data Uploaded'},
  { id: 10, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Temperature Monitor', location: 'Hub(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Data Uploaded'},
  { id: 11, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Pressure Monitor', location: 'Hab(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Data Uploaded'},
  { id: 12, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Door Sensor', location: 'Hab(Lower)', ip:'192.168.123.132', connectionState: 'Disconnected', details: 'Data Uploaded'},
  { id: 13, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Air Quality Monitor', location: 'Hab(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Data Uploaded'},
  { id: 14, date: currentTime.toLocaleDateString(), time: currentTime.toLocaleTimeString(), device: 'Camera', location: 'Hab(Lower)', ip:'192.168.123.132', connectionState: 'Connected', details: 'Data Uploaded'},
];

export default function Devicelogs() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}