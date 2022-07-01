import { Button, Card, CardContent, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

export interface File {
  id: string;
  fileName: string;
  fileSize: number;
  active: boolean;
  expireTime: number; // By number, hour
  createdAt: number; // Timestamp
  dataPointCost: number;
}

function createData(
  id: string,
  fileName: string,
  fileSize: number, // KB
  active: boolean,
  expireTime: number,
  createdAt: number,
  dataPointCost: number
) {
  return { id, fileName, fileSize, active, expireTime, createdAt, dataPointCost };
}

const testData: File[] = [
  createData('6005063a-dc6e-443f-9b24-fb75587d324e', 'test.txt', 100, true, 3, 1656683627, 0),
  createData('9204d087-2061-46ea-99b0-1f4c6f1a64cb', 'hello.ppt', 1024, true, 3, 1656683639, 1),
  createData('84a09145-27b9-43ee-9401-1e040b35f936', 'test.pdf', 10011,  true, 3, 1656683650, 1.14),
  createData('f8f8f8f8-f8f8-f8f8-f8f8-f8f8f8f8f8f8', 'test.doc', 1024, true, 3, 1656683660, 1),
]

export default function AccountDetailPage() {
  return (
    <div>
      <h1>Welcome back, Zeithrold!</h1>
      <h2>Your Data Points</h2>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Zeithrold</b>'s Data Points
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 1.5
              }}>
            <CircularProgress
              variant="determinate"
              value={62.8}
              sx={{mr: '12px'}}
              size={24}
              color="warning"
              />
            3.14 DP / 5.0 DP
          </Typography>
          <Typography variant="body2">
            Current plan: <b>Free (5.0 DP per month)</b>
          </Typography>
        </CardContent>
      </Card>
      <h2>Your Files</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>File Size</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Expire Time</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Cost Of Data Point</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.fileName}
                </TableCell>
                <TableCell>{row.fileSize >= 819.2 ? (row.fileSize / 1024).toFixed(2) + ' GB' : row.fileSize + ' MB'}</TableCell>
                <TableCell>{row.active ? "Active" : "Expired"}</TableCell>
                <TableCell>{row.expireTime < 24 ? row.expireTime + " hour(s)" : Math.floor(row.expireTime / 24) + " day(s)"}</TableCell>
                <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                <TableCell>{row.dataPointCost.toFixed(2) + " DP"}</TableCell>
                <TableCell>
                  <Button color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
