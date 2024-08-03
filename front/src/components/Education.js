import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { education } from '../essentials/Text';

function Education() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>School</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Course</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Status</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Graduation Year [Completed/Expected]</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {education.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.school}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Education;
